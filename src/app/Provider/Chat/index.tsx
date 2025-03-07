import React, { useEffect, useState } from "react";
import { Avatar, Button, Col, Form, Input, Row } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { getMessages, getUserConversations, sendUserMessage } from "api/conversation";
import { useAppState } from "hooks";
import {  useMessageApi } from "utils";
import { socket } from "index";
import ChatBox from "components/ChatBox";
import { getTimePassed } from "helpers";
import "./index.scss";

function Chat() {
  const {
    auth: { user },
  } = useAppState();
  const [conversations, setConversations] = useState([]);
  const [leftSideBarUsers, setLeftSideBarUsers] = useState([]);
  const [activeChat, setActiveChat] = useState<any>(undefined);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const messageApi = useMessageApi();
  const [sendMessage, setSendMessage] = useState(null);
  const [receiveMessage, setReceiveMessage] = useState(null);

  // initializing socket
  useEffect(() => {
    socket.emit("new-user-add", user._id);
    socket.on("get-users", (users: any) => {
      setOnlineUsers(users);
    });
  }, [user]); // [user]

  useEffect(() => {
    // adding event listener for window unload
    console.log("Started listening for event beforeunload");
    window.addEventListener("beforeunload", handleWindowUnload);

    // remove event listener when component unmounts
    return () => {
      window.removeEventListener("beforeunload", handleWindowUnload);
    };
  }, []);

  const handleWindowUnload = () => {
    socket.emit("disconnected");
  };

  // send message to the socket server
  useEffect(() => {
    if (sendMessage !== null) {
      socket.emit("send-message", sendMessage);
    }
  }, [sendMessage]);

  // receive message from socket server
  useEffect(() => {
    socket.on("receive-message", (data: any) => {
      setReceiveMessage(data);
    });
  }, []);

  const checkOnlineStatus = (chat: any) => {
    const chatMember = chat.members.find((member: any) => member !== user._id);
    const online = onlineUsers.find((user: any) => user.userId === chatMember);
    return online ? true : false;
  };

  const getConversations = async () => {
    try {
      const { data } = await getUserConversations(user._id);
      console.log("Conversations", data.conversations);
      setConversations(data?.conversations || []);
    } catch (err: any) {
      messageApi.error(err?.request?.data?.msg || "Error Fetching Conversation!");
    }
  };

  useEffect(() => {
    getConversations();
  }, []);

  useEffect(() => {
    if (conversations.length > 0) {
      const otherMembers =
        conversations.map((conversation: any) => {
          const otherMember = conversation.members.find(
            (member: any) => member._id !== user._id
          );
          return otherMember;
        }) || [];

      console.log("LEFT SIDE BAR", otherMembers);
      // @ts-ignore
      setLeftSideBarUsers(otherMembers);
    }
  }, [conversations]);

  const getCreatedAt = (userId: any) => {
    const relevantConversation = conversations.find((conversation: any) => {
      // Check if the members array includes the specified userId
      return conversation.members.some((member: any) => member._id === userId);
    });

    if (relevantConversation) {
      // You can now access the createdAt property of the relevant conversation
      // @ts-ignore
      return relevantConversation.createdAt;
    } else {
      // Handle the case when no relevant conversation is found
      return null;
    }
  };

  const handleActiveChat = (user: any) => {
    const relevantConversation = conversations.find((conversation: any) => {
      // Check if the members array includes the specified userId
      return conversation.members.some(
        (member: any) => member._id === user._id
      );
    });
    console.log("Relevant", relevantConversation);
    // @ts-ignore
    setActiveChat({ conversation: relevantConversation, receiver: user });
  };

  return (
    <Row className="!gap-y-[5px] flex flex-col" gutter={[16, 16]}>
      <Row>
        <div className="p-[12px_32px] text-[30px] font-medium">Messages</div>
      </Row>
      <Row>
        <Col
          className="pl-8 pr-4 h-[calc(100vh-85px)]"
          span={8}
        >
          <div className="h-full overflow-y-auto scrollbar-thin scrollbar-transparent flex flex-col rounded-[14px]">
            <div className="left-header">
              <div className="flex justify-between items-center bg-white px-2 py-0.5 border-b border-[#afb8cf]">
                <h3> All Messages</h3>

                <Button>
                  <i className="icon-dots"></i>
                </Button>
              </div>

              <div className="border-b border-[#afb8cf] bg-white p-[16px_19px]">
                <Input
                  addonBefore={<SearchOutlined />}
                  placeholder="Search or start a new chat"
                />
              </div>
            </div>

            <div className="scroll-hide">
              {leftSideBarUsers.map((user: any) => (
                <>
                  <div
                    className="p-[22px_10px] bg-white flex items-center justify-between cursor-pointer"
                    onClick={() => handleActiveChat(user)}
                  >
                    <div className="flex items-center gap-[15px] w-[80%]">
                      <Avatar
                        className="!w-[50px] !h-[50px]"
                        src={<img src={user?.about?.profilePic} alt="avatar" />}
                      />
                      <div className="w-[70%]">
                        <h3 className="m-0 text-[17px] whitespace-nowrap overflow-hidden text-ellipsis">{`${user.name.first} ${user.name.last}`}</h3>
                        {/* <p className="p-tag-message">{user.lastMessage}</p> */}
                        <p className="m-0 text-[#afb8cf] whitespace-nowrap overflow-hidden text-ellipsis">{`matched ${getTimePassed(
                          getCreatedAt(user?._id)
                        )}`}</p>
                      </div>
                    </div>
                    <Button className="border-none">
                      <i className="icon-favorite"></i>
                    </Button>
                  </div>
                  <div className="border-t border-[#afb8cf]"></div>
                </>
              ))}
            </div>
          </div>
        </Col>
        <Col
          className="bg-[#f1f1f1] pr-8 flex flex-col"
          span={16}
        >
          <div className="bg-white rounded-[14px] h-full flex flex-col">
            <ChatBox
              chat={activeChat}
              setSendMessage={setSendMessage}
              receiveMessage={receiveMessage}
            />
          </div>
        </Col>
      </Row>
    </Row>
  );
}

export default Chat;

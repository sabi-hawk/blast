import { DeleteOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row, Select } from "antd";
import { getDesign, getTemplatesNames, saveTemplate } from "api/templates";
import axios from "axios";
import { setTemplates } from "flux/reducers/meta";
import { useAppState } from "hooks";
import React, { useEffect, useRef, useState } from "react";
import EmailEditor from "react-email-editor";
import { useDispatch } from "react-redux";
import { useMessageApi } from "utils";

function EmailComposer() {
  const {
    auth: { user },
    meta,
  } = useAppState();
  const dispatch = useDispatch();
  const messageApi = useMessageApi();
  const [templateName, setTemplateName] = useState("New Template");
  const emailEditorRef: any = useRef(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDesignSaving, setIsDesignSaving] = useState<boolean>(false);

  useEffect(() => {
    const getTemplateNames = async () => {
      try {
        const { data } = await getTemplatesNames(user?._id as string);
        // setDesignNames(data.files);
        dispatch(setTemplates(data.files));
      } catch (err) {
        console.log("Error | Composer | getDesigns", err);
      }
    };
    getTemplateNames();
  }, []);

  const handleSelectChange = async (value: string) => {
    try {
      const { data } = await getDesign(value);
      emailEditorRef.current.editor.loadDesign(data.design);
    } catch (err) {
      console.log("Error | Composer | handleSelectChange", err);
    }
  };

  

  const exportHtml = async () => {
    setIsDesignSaving(true);
    // @ts-ignore
    emailEditorRef?.current?.editor?.exportHtml(async (data: HtmlExport) => {
      const { design, html } = data;
      try {
        const { data } = await saveTemplate(
          user?._id as string,
          design,
          html,
          templateName
        );
        dispatch(setTemplates(data.files));
        messageApi.success(data.message);
        setIsDesignSaving(false);
      } catch (err) {
        console.log("Error | Composer | ExportHTML", err);
      }
    });
  };

  const loadDesign = async (event: any, name: string) => {
    event.preventDefault();
    const { data } = await axios.get(
      `http://localhost:8000/api/templates/design?name=${name}`
    );
    emailEditorRef.current.editor.loadDesign(data.design);
  };

  const onReady = async () => {
    // editor is ready
    setIsLoading(false);
    // @ts-ignore
    emailEditorRef.current.editor.registerCallback(
      "image",
      //  @ts-ignore
      async function (file: FileInfo, done: FileUploadDoneCallback) {
        const formData = new FormData();
        const config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };
        console.log("FILE", file);
        formData.append("single", file.attachments[0]);
        const { data } = await axios.post(
          "http://localhost:8000/api/media/upload",
          formData,
          { headers: config.headers }
        );
        // Do something to upload the image and return the URL of the uploaded image
        done({
          url: `http://localhost:8000/images/` + data.nameList[0],
          progress: 0,
        });
      }
    );
    document.getElementById("btn-export")?.classList.remove("d-none");
    console.log("onReady");
  };

  return (
    <>
      {isLoading && (
        <div className="effect-loading">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          {"  "}
          Loading ...
        </div>
      )}
      <Row className={isLoading ? "d-none" : "composer-parent h-full"}>
        <Col className="w-full flex flex-col">
          <Row className="gap-[10px] p-[10px] justify-between">
            <Col>
              <Input
                className="w-auto"
                placeholder="Basic usage"
                value={templateName}
                onChange={(e) => setTemplateName(e.target.value)}
              />
            </Col>
            <Col className="gap-[10px] flex">
              <Select
                showSearch
                placeholder="Choose Design"
                optionFilterProp="label"
                onChange={handleSelectChange}
                onSearch={onSearch}
                options={meta?.templates.map((template) => {
                  return {
                    label: template.includes("design")
                      ? template.split(".")[0]
                      : template.split(".")[1],
                    value: template,
                  };
                })}
              />
              <Button
                icon={<DeleteOutlined />}
                onClick={(event) => loadDesign(event, "")}
              >
                Empty
              </Button>
              <Button
                icon={<SaveOutlined />}
                onClick={exportHtml}
                loading={isDesignSaving}
              >
                Save
              </Button>
            </Col>
          </Row>
          <Row className="email-editor flex-grow">
            <EmailEditor
              ref={emailEditorRef}
              onLoad={onLoad}
              onReady={onReady}
            />
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default EmailComposer;

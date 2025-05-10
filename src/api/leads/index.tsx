import API from "../index";


export const saveLeads = (
  userId: any,
  formData: any // optional
) =>
  API.post(`/leads/import/${userId}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });


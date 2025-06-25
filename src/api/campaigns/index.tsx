import API from "../index";

// campaignName is required in the payload
type CampaignPayload = {
  templateId: string;
  groupIds: string[];
  campaignName: string;
  description?: string;
  scheduled: boolean;
  scheduleDate?: Date;
};

export const addCampaign = (data: CampaignPayload) => API.post("/campaigns", data);
export const getCampaigns = () => API.get("/campaigns");
export const updateCampaign = (id: string, data: CampaignPayload) => API.put(`/campaigns/${id}`, data);
export const deleteCampaign = (id: string) => API.delete(`/campaigns/${id}`);
export const getCampaignStats = () => API.get("/campaigns/stats");
export const getCampaignAnalytics = () => API.get("/campaigns/analytics"); 
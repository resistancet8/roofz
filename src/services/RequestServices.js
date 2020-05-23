import RestfulProvider from "../utils/RestfulProvider";
let requestedBy = 'admin';

class RequestServices {
  login = data => {
    return RestfulProvider.post('/loginUser', {...data, requestedBy})
  }
  updateGroup = (data, propertyId, groupId) => {
    return RestfulProvider.put(`groups/${propertyId}/${groupId}`, {...data, requestedBy});
  };
  getRoles = () => {
    return RestfulProvider.get(`/fetchAllRoles?requestedBy=${requestedBy}`); 
  };
  getOrganisationTypes = () => {
    return RestfulProvider.get(`organization/types/pagination`);
  };
  addOrganisationTypes = (data) => {
    return RestfulProvider.post(`organization/types/save`, {...data, requestedBy});
  };
  
  addRole = (data) => {
    return RestfulProvider.post(`addRole`, {...data, requestedBy});
  };

  getModules = () => {
    return RestfulProvider.get(`module/modules/pagination`);
  };
  addModules = (data) => {
    return RestfulProvider.post(`module/save`, {...data, requestedBy});
  };
  updateCategory = (data, groupId, categoryId) => {
    return RestfulProvider.put(`categories/${groupId}/${categoryId}`, {...data, requestedBy});
  };
  addUser = (data) => {
    return RestfulProvider.post(`addUser`, {...data, requestedBy});
  };
  getUsers = () => {
    return RestfulProvider.get(`fetchAllUsers?requestedBy=${requestedBy}`);
  };
  getUserByUsername = (data) => {
    return RestfulProvider.post(`fetchUserByUsername`,  {...data, requestedBy});
  }
  updatePersonalDetails = (data) => {
    return RestfulProvider.put(`updatePersonalDetailsOfUser`, {...data, requestedBy});
  }
  updateWorkDetails = (data) => {
    return RestfulProvider.put(`updateWorkDetailsOfUser`, {...data, requestedBy});
  }
  updateContactDetails = (data) => {
    return RestfulProvider.put(`updateContactDetailsOfUser`, {...data, requestedBy});
  }
  getPackages = () => {
    return RestfulProvider.get(`package/packages/pagination`);
  }
  addPackage = (data) => {
    return RestfulProvider.post(`package/save`, {...data, requestedBy});
  };

  getDiscounts = () => {
    return RestfulProvider.get(`discount/discounts/pagination`);
  }

  addDiscount = (data) => {
    return RestfulProvider.post(`discount/save`, {...data, requestedBy});
  };
}
export default new RequestServices();

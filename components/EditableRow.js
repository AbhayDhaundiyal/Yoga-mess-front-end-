import React from "react";

const EditableRow = ({
    editFormData,
  handleEditFormChange,
  handleEditCancelClick,
  handleEditFormSubmit
}) => {
  return (
    <tr className= "editableRow">
      <td>
        <input
          type="text"
          required="required"
          placeholder="Resource group..."
          name="resource_group"
          value={editFormData.resource_group}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="k8s cluster..."
          name="k8s_cluster"
          value={editFormData.k8s_cluster}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="k8s namespace..."
          name="k8s_namespace"
          value={editFormData.k8s_namespace}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="A1 environment..."
          name="A1_environment"
          value={editFormData.A1_environment}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="web gitlab branch..."
          name="web_gitlab_branch"
          value={editFormData.web_gitlab_branch}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="jenkins gitlab branch..."
          name="jenkins_gitlab_branch"
          value={editFormData.jenkins_gitlab_branch}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <textarea
          type="text"
          required="required"
          placeholder="A1 URL..."
          name="A1_URl"
          value={editFormData.A1_URl}
          onChange={handleEditFormChange}
        ></textarea>
      </td>
      <td>
        <textarea
          type="text"
          required="required"
          placeholder="PCLM URL..."
          name="PCLM_URL"
          value={editFormData.PCLM_URL}  
          onChange={handleEditFormChange}
        ></textarea>
      </td>
      <td>
      <textarea
          type="text"
          required="required"
          placeholder="ArangoDB URL..."
          name="ArangoDB_URL"
          value={editFormData.ArangoDB_URL}
          onChange={handleEditFormChange}
        ></textarea>
      </td>
      <td>
      <textarea
          type="text"
          required="required"
          placeholder="Graphana url..."
          name="Graphana_url"
          value={editFormData.Graphana_url}
          onChange={handleEditFormChange}
        ></textarea>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Status..."
          name="Status"
          value={editFormData.Status}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
      <textarea
          type="text"
          required="required"
          placeholder="Remarks..."
          name="Remarks"
          value={editFormData.Remarks}
          onChange={handleEditFormChange}
        ></textarea>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="HPC appliance id..."
          name="HPC_appliance_id"
          value={editFormData.HPC_appliance_id}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="HPC appliance name..."
          name="HPC_appliance_name"
          value={editFormData.HPC_appliance_name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit" onClick={handleEditFormSubmit}>Save</button>
        <button type="button" onClick={handleEditCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow; 
import React from "react";
// Form which will take all entries to be added in table as input.
const AddRow = ({
  handleAddFormChange,
  handleCancelClick,
  handleAddFormSubmit
}) => {
  return (
    <form onSubmit={handleAddFormSubmit}>
        <div className="add-row-group">
        <label htmlFor="resource_group">Resource group</label>
        <input type="text" className="add-row-form" name="resource_group" required  onChange={handleAddFormChange} />

        <label htmlFor="k8s_cluster">k8s Cluster</label>
        <input type="text" className="add-row-form" name="k8s_cluster" required  onChange={handleAddFormChange} />

        <label htmlFor="k8s_namespace">k8s Namespace</label>
        <input type="text" className="add-row-form" name="k8s_namespace"required  onChange={handleAddFormChange}  />

        <label htmlFor="A1_environment">A1 Environment</label>
        <input type="text" className="add-row-form" name="A1_environment" required  onChange={handleAddFormChange}  />

        <label htmlFor="web_gitlab_branch">Web gitlab branch</label>
        <input type="text" className="add-row-form" name="web_gitlab_branch" required  onChange={handleAddFormChange} />

        <label htmlFor="jenkins_gitlab_branch">Jenkins gitlab branch</label>
        <input type="text" className="add-row-form" name="jenkins_gitlab_branch" required  onChange={handleAddFormChange} />

        <label htmlFor="A1_URl">A1 URl</label>
        <input type="text" className="add-row-form" name="A1_URl" required  onChange={handleAddFormChange} />

        <label htmlFor="PCLM_URL">PCLM URL</label>
        <input type="text" className="add-row-form" name="PCLM_URL" onChange={handleAddFormChange} />

        <label htmlFor="ArangoDB_URL">ArangoDB URL</label>
        <input type="text" className="add-row-form" name="ArangoDB_URL" required  onChange={handleAddFormChange} />

        <label htmlFor="Graphana_url">Graphana URL</label>
        <input type="text" className="add-row-form" name="Graphana_url" required  onChange={handleAddFormChange} />

        <label htmlFor="Status">Status</label>
        <input type="text" className="add-row-form" name="Status" required  onChange={handleAddFormChange} />

        <label htmlFor="Remarks">Remarks</label>
        <input type="text" className="add-row-form" name="Remarks" onChange={handleAddFormChange}/>

        <label htmlFor="HPC_appliance_id_url">HPC Appliance Id URL</label>
        <input type="text" className="add-row-form" name="HPC_appliance_id_url" onChange={handleAddFormChange} />      
      
        <button type="submit" className="add-row-submit">Save</button>
        <button type="button" className="add-row-cancel" onClick={handleCancelClick}>
          Cancel
        </button>
        </div>
      </form>
  );
};

export default AddRow;
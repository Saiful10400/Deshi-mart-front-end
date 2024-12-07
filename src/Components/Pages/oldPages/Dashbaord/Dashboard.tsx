import Table from "../../Layouts/Dashboard/Table";
import CenterAlign from "../../Helper/CenterAlign";
import Button from "../../Ui/Button";
import Modal from "../../Ui/Modal";

const Dashboard = () => {
  const createNewButtonHandle = () => {
    document.getElementById("my_modal")?.showModal();
  };

  return (
    <CenterAlign>
      <div data-aos="fade-down" className="flex justify-between items-center lg:mt-2">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button onClick={createNewButtonHandle} text="Create New" />
        <Modal />
      </div>
      <Table />
    </CenterAlign>
  );
};

export default Dashboard;

import _ from "lodash";

const Dashboard = () => {
    const element = document.createElement("div");

    element.innerHTML = _.join(["Hello", "dashboard", " "]);

    return element;
};

export default Dashboard;
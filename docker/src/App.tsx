import './App.css';
import React, {useState} from "react";
import NavigationBar from "./Components/NavigationBar/NavigationBar.tsx";
import ContainerList from "./Components/ContainerList/ContainerList.tsx";
import ImageList from "./Components/ImageList/ImageList.tsx";


const App: React.FC = () => {
    const [activeTab, setActiveTab] = useState<"containers" | "images">("containers");

    return (
        <div className="app">
            <NavigationBar activeTab={activeTab} setActiveTab={setActiveTab}/>
            <div className="content">
                {activeTab === "containers" ? <ContainerList/> : <ImageList/>}
            </div>

        </div>

    )
};
export default App;
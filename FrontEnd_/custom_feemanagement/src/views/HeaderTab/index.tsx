import React from "react";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";

import 'react-tabs/style/react-tabs.css';
//const logo = require('../../../assets/logos/schoollogo.png'); 
import logo from '../../../assets/logos/schoollogo.png';
import './headerTab.css'
import { TAB_COMPONENT_MAPPER } from "../../utils/tabComponentMapper";
import tabsDatajson from "./tabStructure.json";



const HeaderTab = () => {
    //const userRole = "admin"; // get this from auth context or API
    return (
        <div>
            <header className="tab-head">
                <img className="tab-head-img" src={logo} alt="logo"></img>
                <h2>NEW LIFE MATRICULATION ACADEMY</h2>
            </header>
            <Tabs>
                <TabList>
                    {
                        tabsDatajson.tabs.map((tab: any) => {
                            return <Tab key={tab.key}>{tab.name} </Tab>
                        }
                        )
                    }
                </TabList>
                {tabsDatajson.tabs.map((tab: any) => {
                    const Component = TAB_COMPONENT_MAPPER[tab.component];
                    return (
                        <TabPanel key={tab.key}>
                            {tab.childTabs && tab.childTabs.length > 0 ? (
                                <Tabs>
                                    <TabList>
                                        {
                                            
                                            tab.childTabs.map((childTab: any) => {
                                               return <Tab key={childTab.childComponent_key}>{childTab.name}</Tab>
                                            })
                                        }
                                        </TabList>
                                        
                                         {tab.childTabs.map((childTab: any) => {
                                                const ChildComponent = TAB_COMPONENT_MAPPER[childTab.childComponent_key];
                                                return (
                                                    <TabPanel key={childTab.key}>
                                                        {ChildComponent ? <ChildComponent /> : "child component not found"}
                                                    </TabPanel>
                                                );

                                            })
                                        }
                                    {/* </TabList>
                                </Tabs> */}
                                </Tabs>
                            ) : (
                                 Component?<Component /> : <p>Component does not exist</p>)}
                        </TabPanel>
                    );
                })
                }
            </Tabs>
        </div>
    );
};

export default HeaderTab;
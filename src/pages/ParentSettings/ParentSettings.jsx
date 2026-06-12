import "./ParentSettings.css";

import { useState } from "react";

import ParentSidebar from "../../components/ParentSidebar/ParentSidebar";
import ParentHeader from "../../components/ParentHeader/ParentHeader";

import ParentProfileSettings from "../../components/ParentProfileSettings/ParentProfileSettings";
import ParentNotificationSettings from "../../components/ParentNotificationSettings/ParentNotificationSettings";

import {
    parentProfileData,
    parentNotificationSettings,
} from "../../data/parentSettingsData";

function ParentSettings() {
    const [settings, setSettings] = useState(
        parentNotificationSettings
    );

    return (
        <div className="parent-settings-layout">
            <ParentSidebar />

            <main className="parent-settings-main">
                <ParentHeader
                    title="Settings"
                    subtitle="Manage profile information and notification preferences"
                />
                <div className="parent-settings-content">
                    

                    <div className="settings-grid">
                        <ParentProfileSettings
                            profileData={parentProfileData}
                        />

                        <ParentNotificationSettings
                            settings={settings}
                            setSettings={setSettings}
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ParentSettings;
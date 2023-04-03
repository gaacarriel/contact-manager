import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { ContactsProvider } from "../contexts/ConcatsContext";
import { ModalProvider } from "../contexts/ModalContext";

export const RoutesMain = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route
                    path="/dashboard"
                    element={
                        <ContactsProvider>
                            <ModalProvider>
                                <DashboardPage />
                            </ModalProvider>
                        </ContactsProvider>
                    }
                />
            </Routes>
        </>
    );
};

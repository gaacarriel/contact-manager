import { UserProvider } from "./contexts/UserContext";
import { RoutesMain } from "./routes/routesMain";

export function App() {
    return (
        <>
            <UserProvider>
                <RoutesMain />
            </UserProvider>
        </>
    );
}

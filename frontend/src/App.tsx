import { Route, Routes, useNavigate } from "react-router-dom";
import { dark } from "@clerk/themes";
import "./App.css";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import SelectOrg from "./pages/SelectOrg/SelectOrg";
import ValidationLayer from "./pages/ValidationLayer";
import TeamMembers from "./pages/TeamMembers/TeamMembers";
import Routebook from "./pages/Routebook/Routebook";
import Admin from "./pages/Admin/Admin";
import Profile from "./pages/Profile/Profile";

const PUBLISHABLE_KEY =
  "pk_test_Zmlyc3QtdXJjaGluLTkuY2xlcmsuYWNjb3VudHMuZGV2JA";

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

function App(): React.ReactNode {
  const navigate = useNavigate();

  // async function greet(): React.ReactNode {
  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   setGreetMsg(await invoke("greet", { name }));
  // }

  return (
    <ClerkProvider
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
      publishableKey={"pk_test_Zmlyc3QtdXJjaGluLTkuY2xlcmsuYWNjb3VudHMuZGV2JA"}
      appearance={{ baseTheme: [dark] }}
    >
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SignedIn>
                <ValidationLayer></ValidationLayer>
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        ></Route>

        <Route
          path="/selectOrg"
          element={
            <>
              <SignedIn>
                <SelectOrg></SelectOrg>
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        ></Route>

        <Route
          path="/routebook"
          element={
            <>
              <SignedIn>
                <Routebook />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        ></Route>

        <Route
          path="/TeamMembers"
          element={
            <>
              <SignedIn>
                <TeamMembers />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />

        <Route
          path="/Admin"
          element={
            <>
              <SignedIn>
                <Admin />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
        <Route path="/Profile" element={<Profile></Profile>}></Route>
      </Routes>
    </ClerkProvider>
  );
}

export default App;

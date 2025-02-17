import React from "react";

import { Switch, Route, useRouteMatch } from "react-router-dom";

import ActionPageLayout from "../../components/ActionPageLayout";
import ProtectedRoute from "../../components/Protected.route";
import PageNotFound from "../../components/PageNotFound";

import UserActions from "../../components/UserActions";

import "../../styles/adminHome.css";

import AdminProfile from "../../components/AdminProfile";
import { FcInfo } from "react-icons/fc";
import { Container } from "react-bootstrap";

import ProviderInfoCard from "../../components/ProviderInfoCard";
import ProviderImage from "../../assets/images/provider-avatar.png";

const adminActions = [
  { id: 1, name: "Profile" },
  { id: 2, name: "Assign Patients to Doctors" },
];

function AdminHome() {
  let match = useRouteMatch();

  return (
    <>
      <Switch>
        <ProtectedRoute exact path="/home/adminHome/Profile">
          <ActionPageLayout
            status={
              <p style={{ color: "green", fontSize: "18px" }}>
                <FcInfo /> You are logged in as admin
              </p>
            }
            actions={
              <UserActions actions={adminActions} userHome="/home/adminHome/" />
            }
            content={
              <AdminProfile
                fullname="Prabhat"
                hospital="Hospital"
                address="India"
                id="200123"
                expiration="01/05/2040"
              />
            }
          />
        </ProtectedRoute>
        <ProtectedRoute exact path="/home/adminHome/AssignPatientsToDoctors">
          <ActionPageLayout
            status={
              <p style={{ color: "green", fontSize: "18px" }}>
                <FcInfo /> You are logged in as admin
              </p>
            }
            actions={
              <UserActions actions={adminActions} userHome="/home/adminHome/" />
            }
            content={
              <div
                style={{
                  display: "flex",
                  flexFlow: "row wrap",
                  justifyContent: "space-evenly",
                  padding: "10px",
                }}
              >
                <ProviderInfoCard
                  image={<img src={ProviderImage} alt="provider-avatar" />}
                  name="Dr.Ram"
                  department="Dep. Antology"
                />
                <ProviderInfoCard
                  image={<img src={ProviderImage} alt="provider-avatar" />}
                  name="Dr.Sonu"
                  department="Dep. Antology"
                />
                <ProviderInfoCard
                  image={<img src={ProviderImage} alt="provider-avatar" />}
                  name="Dr.Simran"
                  department="Dep. Antology"
                />
                <ProviderInfoCard
                  image={<img src={ProviderImage} alt="provider-avatar" />}
                  name="Dr. Resham"
                  department="Dep. Antology"
                />
                <ProviderInfoCard
                  image={<img src={ProviderImage} alt="provider-avatar" />}
                  name="Dr.Govind"
                  department="Dep. Antology"
                />
                <ProviderInfoCard
                  image={<img src={ProviderImage} alt="provider-avatar" />}
                  name="Dr. RAdha"
                  department="Dep. Antology"
                />
                <ProviderInfoCard
                  image={<img src={ProviderImage} alt="provider-avatar" />}
                  name="Dr. Aehm "
                  department="Dep. Antology"
                />
                <ProviderInfoCard
                  image={<img src={ProviderImage} alt="provider-avatar" />}
                  name="Dr. Laila "
                  department="Dep. Antology"
                />
              </div>
            }
          />
        </ProtectedRoute>
        <Route exact path={match.path}>
          <ActionPageLayout
            status={
              <p style={{ color: "green", fontSize: "18px" }}>
                <FcInfo /> You are logged in as admin
              </p>
            }
            actions={
              <UserActions actions={adminActions} userHome="/home/adminHome/" />
            }
            content={
              <AdminProfile
                fullname="Prabhat"
                hospital=" Hospital"
                address="india"
                id="200123"
                expiration="01/05/2040"
              />
            }
          />
        </Route>
        <Route path="*" component={PageNotFound} />
      </Switch>
    </>
  );
}

export default AdminHome;

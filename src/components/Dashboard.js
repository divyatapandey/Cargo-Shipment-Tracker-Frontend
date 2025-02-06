import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShipments } from "../redux/shipmentSlice";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }
  th {
    background: #007bff;
    color: white;
  }
`;

const Dashboard = () => {
  const dispatch = useDispatch();
  const { shipments, status } = useSelector((state) => state.shipments);

  useEffect(() => {
    dispatch(fetchShipments());
  }, [dispatch]);

  return (
    <Container>
      <h2>Shipment Dashboard</h2>
      {status === "loading" ? <p>Loading...</p> : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Container ID</th>
              <th>Current Location</th>
              <th>ETA</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {shipments.map((shipment) => (
              <tr key={shipment._id}>
                <td>{shipment._id}</td>
                <td>{shipment.containerId}</td>
                <td>{shipment.currentLocation}</td>
                <td>{shipment.eta}</td>
                <td>{shipment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Container>
  );
};

export default Dashboard;

import React, { useEffect, useState } from "react";

import { Row, Col, Tag, Divider, Tabs, Input, Card, Button } from "antd";

import {
  CopyOutlined,
  DatabaseOutlined,
  SettingOutlined,
  LineChartOutlined,
  SyncOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";

const { TabPane } = Tabs;

const ClusterDetails = () => {
  const [host, setHost] = useState("hktfgjaymvppxurjixty.spinup.host");
  const [database, setDatabase] = useState("postgres");
  const [port, setPort] = useState(5432);
  const [username, setUsername] = useState("johndoe");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  useEffect(() => {
    console.log(username);
  }, [username]);
  return (
    <>
      <Row style={{ marginTop: "50px" }}>
        <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={2} />
        <Col
          xxl={6}
          xl={6}
          lg={6}
          xs={8}
          md={8}
          sm={8}
          style={{ display: "flex" }}
        >
          <h2 style={{ color: "white" }}>
            <b>Spinup</b>
          </h2>
          <Tag
            style={{ height: "23px", marginTop: "7px", marginLeft: "20px" }}
            color="#f4f5f7"
          >
            <b style={{ color: "black" }}>Not Connected</b>
          </Tag>
          <p style={{ color: "#3fd8d7", marginTop: "9px", marginLeft: "15px" }}>
            <SyncOutlined /> Refresh
          </p>
        </Col>
        <Col xxl={11} xl={11} lg={11} xs={9} md={9} sm={9}>
          <Tag color="#2c383c" style={{ float: "right", borderRadius: "5px" }}>
            <h2 style={{ color: "#dcdce5", marginTop: "9px" }}>
              <CopyOutlined /> Copy Host Link
            </h2>
          </Tag>
        </Col>
        <Col xxl={4} xl={4} lg={4} md={1} />
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={2} />
        <Col
          xxl={17}
          xl={17}
          lg={17}
          xs={20}
          md={20}
          sm={20}
          style={{ display: "flex" }}
        >
          <h3 style={{ color: "#738095" }}>
            <b>
              <LineChartOutlined /> Monitoring
            </b>
          </h3>
          <h3 style={{ marginLeft: "40px", color: "#738095" }}>
            <b>
              <DatabaseOutlined /> Databases
            </b>
          </h3>
          <h3 style={{ marginLeft: "40px", color: "#738095" }}>
            <b>
              <SettingOutlined /> Configurations
            </b>
          </h3>
        </Col>
        <Col xxl={4} xl={4} lg={4} xs={2} md={1} sm={2} />
      </Row>
      <Divider style={{ backgroundColor: "#313b4d", marginTop: "-1px" }} />
      <Row>
        <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={2} />
        <Col xxl={9} xl={9} lg={9} xs={20} md={10} sm={20}>
          <p style={{ color: "#738095" }}>Host</p>
          <Input
            bordered={false}
            style={{
              backgroundColor: "#394150",
              color: "white",
              height: "60px",
              borderRadius: "5px",
            }}
            disabled
            value={host}
          />
        </Col>
        <Col xxl={4} xl={4} lg={4} />
        <Col xxl={4} xl={4} lg={4} xs={20} md={10} sm={20}>
          <Card
            style={{
              width: "308px",
              backgroundColor: "#283141",
              border: "none",
            }}
            headStyle={{
              borderBottom: "none",
            }}
            title={
              <p style={{ color: "#6abfaf" }}>
                Connect to your cluster <br /> from anywhere
              </p>
            }
          >
            <p style={{ color: "#a0aec8", marginTop: "-30px" }}>
              Open Terminal on your device
            </p>
            <p style={{ color: "#a0aec8" }}>
              Copy paste your host link & press enter
            </p>
            <p style={{ color: "#a0aec8" }}>Enter your password. voila!</p>
            <p style={{ color: "#a0aec8" }}>Create as much as dbs you want!</p>
          </Card>
        </Col>
        <Col xxl={4} xl={4} lg={4} xs={2} md={1} sm={2} />
      </Row>
      <Row style={{ marginTop: "-125px" }}>
        <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={2} />
        <Col xxl={4} xl={4} lg={4} xs={20} md={10} sm={20}>
          <p style={{ color: "#738095" }}>Database Name</p>
          <Input
            bordered={false}
            style={{
              backgroundColor: "#394150",
              color: "white",
              height: "40px",
              borderRadius: "5px",
            }}
            disabled
            value={database}
          />
        </Col>
        <Col xxl={1} xl={1} lg={1} xs={2} md={3} sm={2} />
        <Col xxl={0} lg={0} xl={0} xs={2} md={3} sm={2} />
        <Col xxl={4} xl={4} lg={4} xs={20} md={10} sm={20}>
          <p style={{ color: "#738095" }}>Port</p>
          <Input
            bordered={false}
            style={{
              backgroundColor: "#394150",
              color: "white",
              height: "40px",
              borderRadius: "5px",
            }}
            disabled
            value={port}
          />
        </Col>
        <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={2} />
      </Row>
      <Row>
        <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={2} />
        <Col xxl={9} xl={9} lg={9} xs={20} md={10} sm={20}>
          <Divider style={{ backgroundColor: "#313b4d", marginTop: "50px" }} />
        </Col>
        <Col xxl={9} xl={9} lg={9} md={8} />
        <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={2} />
      </Row>
      <Row>
        <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={2} />
        <Col xxl={4} xl={4} lg={4} xs={20} md={10} sm={20}>
          <p style={{ color: "#738095" }}>Username</p>
          <Input
            bordered={false}
            style={{
              backgroundColor: "#394150",
              color: "white",
              height: "40px",
              borderRadius: "5px",
            }}
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: "25px" }}>
        <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={2} />
        <Col xxl={4} xl={4} lg={4} xs={20} md={10} sm={20}>
          <p style={{ color: "#738095" }}>Enter new password</p>
          <Input.Password
            bordered={false}
            style={{
              backgroundColor: "#394150",
              color: "white",
              height: "40px",
              borderRadius: "5px",
            }}
            iconRender={(visible) =>
              visible ? (
                <EyeTwoTone style={{ color: "white" }} />
              ) : (
                <EyeInvisibleOutlined style={{ color: "white" }} />
              )
            }
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Col>
        <Col xxl={1} xl={1} lg={1} xs={2} md={3} sm={2} />
        <Card
          bordered={false}
          style={{
            backgroundColor: "#212936",
            color: "white",
            lineHeight: "1",
            borderLeft: "1px solid #283141",
          }}
        >
          <p>Must be atleast :</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;10-16 alpha-numeric characters</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;1 uppercase letter (A,B,..Z)</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;1 lowercase letter (a,b,..z)</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;1 number (0-9)</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;1 special character(-,_,$,#,!)</p>
        </Card>
      </Row>
      <Row style={{ marginTop: "-120px" }}>
        <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={2} />
        <Col xxl={4} xl={4} lg={4} xs={20} md={10} sm={20}>
          <p style={{ color: "#738095" }}>Confirm password</p>
          <Input.Password
            bordered={false}
            style={{
              backgroundColor: "#394150",
              color: "white",
              height: "40px",
              borderRadius: "5px",
            }}
            iconRender={(visible) =>
              visible ? (
                <EyeTwoTone style={{ color: "white" }} />
              ) : (
                <EyeInvisibleOutlined style={{ color: "white" }} />
              )
            }
            value={confirm}
            onChange={(e) => {
              setConfirm(e.target.value);
            }}
          />
        </Col>
        <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={2} />
      </Row>
      <Row style={{ marginTop: "25px" }}>
        <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={2} />
        <Button
          type="text"
          style={{
            color: "black",
            backgroundColor: "#42e8e0",
          }}
        >
          <b>Save Changes</b>
        </Button>
        <Button
          type="text"
          style={{
            color: "black",
            backgroundColor: "#212936",
          }}
        >
          <b style={{ color: "#42e8e0" }}>Cancel</b>
        </Button>
      </Row>
      <Row>
        <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={2} />
        <Col xxl={9} xl={9} lg={9} xs={20} md={10} sm={20}>
          <Divider style={{ backgroundColor: "#313b4d", marginTop: "30px" }} />
        </Col>
      </Row>
    </>
  );
};

export default ClusterDetails;

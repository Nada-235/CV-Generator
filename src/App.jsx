// App.js
import React, { useState } from "react";
import { Layout, Steps, Row, Col, Button } from "antd";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import PersonalInfoForm from "./components/PersonalInfoForm";
import EducationForm from "./components/EducationForm";
import WorkExperienceForm from "./components/WorkExperienceForm";
import SkillsForm from "./components/SkillsForm";
import Preview from "./components/Preview";
import { cvSlice } from "./features/cvSlice";

const { Content } = Layout;
const { Step } = Steps;

const store = configureStore({
  reducer: {
    cv: cvSlice.reducer,
  },
});

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { title: "Personal Info", content: <PersonalInfoForm /> },
    { title: "Education", content: <EducationForm /> },
    { title: "Work Experience", content: <WorkExperienceForm /> },
    { title: "Skills", content: <SkillsForm /> },
  ];

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const centeredLayoutStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    background: "#f5f5f5",
    paddingTop: "20px",
  };

  return (
    <Provider store={store}>
      <div style={centeredLayoutStyle}>
        <Layout>
          <Row gutter={[16, 16]}>
            <Col span={10} xs={24} sm={24} md={10} lg={10} xl={10}>
              <Content style={{ padding: "20px" }}>
                <Steps current={currentStep} onChange={setCurrentStep}>
                  {steps.map((step, index) => (
                    <Step key={index} title={step.title} />
                  ))}
                </Steps>
                <div style={{ marginTop: "20px" }}>
                  {steps[currentStep].content}
                </div>
                <div style={{ marginTop: "20px" }}>
                  {currentStep > 0 && (
                    <Button type="text" onClick={handlePrev}>
                      Previous
                    </Button>
                  )}
                  {currentStep < steps.length - 1 && (
                    <Button type="default" onClick={handleNext}>
                      Next
                    </Button>
                  )}
                </div>
              </Content>
            </Col>
            <Content style={{ padding: "20px" }}>
              <Col span={10} xs={24} sm={32} md={10} lg={10} xl={10}>
                <Preview />
              </Col>
            </Content>
          </Row>
        </Layout>
      </div>
    </Provider>
  );
};

export default App;

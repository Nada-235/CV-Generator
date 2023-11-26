import React from "react";
import { useSelector } from "react-redux";
import {
  selectPersonalInfo,
  selectUi,
  selectEducation,
  selectWorkExperience as selectWorkExperienceData,
} from "../features/cvSlice";
import { Layout, Row, Col } from "antd";
import { format } from "date-fns";

import "./Perview.css";
import { CaretDownFilled, EnvironmentFilled, GiftFilled, HeartFilled, HomeFilled, PhoneFilled } from "@ant-design/icons";

const Preview = () => {
  const personalInfo = useSelector(selectPersonalInfo);
  const { showNationality, showWebsite, showLinkedin, showAdditionalFields } =
    useSelector(selectUi);
  const educationData = useSelector(selectEducation);
  const latestEducation = educationData[educationData.length - 1];
  const workExperienceData = useSelector(selectWorkExperienceData);
  const latestExperienceData =
    workExperienceData[workExperienceData.length - 1];

  return (
    <Layout
      style={{
        width: "210mm",
        minHeight: "297mm",
        padding: "5mm",
        border: "1px solid #c3c3c3",
      }}
    >
      <div className="sideColor"></div>
      <div>
        <Row>
          <Col span={10} xs={24} sm={24} md={10} lg={10} xl={10}>
            <h1 className="cvName">{personalInfo.fullName}</h1>
            <h3 className="cvJob">{personalInfo.jobTitle}</h3>
            <Row className="centerflex">
              <Col>
                <PhoneFilled />
              </Col>
              <Col>
                <p>{personalInfo.phoneNumber}</p>
              </Col>
            </Row>

            <Row className="centerflex">
              <Col>
                <HomeFilled />
              </Col>

              <Col>
                <p>{personalInfo.address}</p>
              </Col>
            </Row>

            <Row className="centerflex">
              <Col>
                <EnvironmentFilled />
              </Col>
              <Col>
                <p>{personalInfo.city}</p>
              </Col>
            </Row>

            <Row className="centerflex">
              <Col>
                <GiftFilled />
              </Col>

              <Col>
                <p>
                  {personalInfo.dateOfBirth
                    ? format(new Date(personalInfo.dateOfBirth), "MM/dd/yyyy")
                    : "N/A"}
                </p>
              </Col>
            </Row>
            <Row className="centerflex">
              <Col>
                <CaretDownFilled />
              </Col>
              <Col>
                <p>{personalInfo.gender}</p>
              </Col>
            </Row>

            <Row className="centerflex">
              <Col>
                <HeartFilled />
              </Col>
              <Col>
                <p>{personalInfo.civilStatus}</p>
              </Col>
            </Row>

            <Row
              className="centerflex"
              style={{ display: showNationality ? "block" : "none" }}
            >
              <Col>
                <p>{personalInfo.nationality}</p>
              </Col>
            </Row>

            <Row>
              <p
                style={{
                  width: "90%",
                  overflow: "scroll",
                  display: showWebsite ? "block" : "none",
                }}
              >
                Website: {personalInfo.website}
              </p>
            </Row>

            <Row>
              <p style={{ display: showLinkedin ? "block" : "none" }}>
                LinkedIn: {personalInfo.linkedin}
              </p>
            </Row>
          </Col>

          <Col span={10} xs={24} sm={24} md={10} lg={10} xl={10}>
            {educationData.length > 0 && (
              <div>
                <p>Degree: {latestEducation.degree}</p>
                <p>School: {latestEducation.school}</p>
                <p>City: {latestEducation.city}</p>
                <p>
                  Start Date:
                  {latestEducation.startDate
                    ? format(new Date(latestEducation.startDate), "MM/dd/yyyy")
                    : "N/A"}
                </p>
                <p>
                  End Date:
                  {latestEducation.endDate
                    ? format(new Date(latestEducation.endDate), "MM/dd/yyyy")
                    : "N/A"}
                </p>
                <p>Description: {latestEducation.description}</p>
              </div>
            )}
          </Col>
        </Row>
        <Row>
          <Col span={"20"}>
            {workExperienceData.length > 0 && (
              <div>
                <p>Position: {latestExperienceData.jobTitle}</p>
                <p>Company: {latestExperienceData.company}</p>
                <p>
                  Start Date:
                  {latestExperienceData.startDate
                    ? format(
                        new Date(latestExperienceData.startDate),
                        "MM/dd/yyyy"
                      )
                    : "N/A"}
                </p>
                <p>
                  End Date:
                  {latestExperienceData.endDate
                    ? format(
                        new Date(latestExperienceData.endDate),
                        "MM/dd/yyyy"
                      )
                    : "N/A"}
                </p>
                <p>Description: {latestExperienceData.description}</p>

                {showAdditionalFields && (
                  <>
                    <p>
                      Additional Position:{" "}
                      {latestExperienceData.additionalJobTitle}
                    </p>
                    <p>
                      Additional Company:{" "}
                      {latestExperienceData.additionalCompany}
                    </p>
                    <p>
                      Additional Start Date:
                      {latestExperienceData.additionalStartDate
                        ? format(
                            new Date(latestExperienceData.additionalStartDate),
                            "MM/dd/yyyy"
                          )
                        : "N/A"}
                    </p>
                    <p>
                      Additional End Date:
                      {latestExperienceData.additionalEndDate
                        ? format(
                            new Date(latestExperienceData.additionalEndDate),
                            "MM/dd/yyyy"
                          )
                        : "N/A"}
                    </p>
                    <p>
                      Additional Description:{" "}
                      {latestExperienceData.additionalDescription}
                    </p>
                  </>
                )}
              </div>
            )}
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default Preview;

import { Container, Row } from "react-bootstrap";
import SectionTitle from "../../Components/allComponents/SectionTitle";
import ServicesCard from "../../Components/ServicesComponents/ServiceCard";
import { useEffect, useState } from "react";
import axios from "axios";
import * as Icons from "react-icons/ri";

function Services() {
  const [servicesData, setServicesData] = useState([]);
  useEffect(() => {
    axios.get("/api/services").then((res) => {
      setServicesData(res.data);
    });
  });
  const DynamicIcon = ({ iconName }) => {
    const IconComponent = Icons[iconName];
    return <IconComponent />;
  };

  return (
    <>
      <div className="py-5">
        <SectionTitle
          titleName={"Services"}
          titleDescription={
            "Veritatis et dolores facere numquam et praesentium"
          }
        />
        <Container>
          <Row className="mx-0">
            {servicesData.map((e, i) => {
              return (
                <>
                  <ServicesCard
                    key={i}
                    icon={<DynamicIcon iconName={e.icon} />}
                    title={e.title}
                    description={e.description}
                    btnTitle={e.btnTitle}
                    color={e.color}
                  />
                </>
              );
            })}
          </Row>
        </Container>
      </div>
      {/* <Outlet/> */}
    </>
  );
}

export default Services;

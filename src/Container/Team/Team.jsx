import { Container, Row } from "react-bootstrap";
import TeamCard from "../../Components/TeamComponents/TeamCard";
import SectionTitle from "../../Components/allComponents/SectionTitle";
import { useEffect, useState } from "react";
import axios from "axios";

function Team() {
  const [teamCardData, setTeamCardData] = useState([]);
  useEffect(() => {
    axios.get("/api/team").then((res) => {
      setTeamCardData(res.data);
    });
  });

  return (
    <>
      <div className="py-5">
        <SectionTitle
          titleName={"TEAM"}
          titleDescription={"Our hard working"}
        />
        <Container>
          <Row className="mx-0">
            {teamCardData.map((e, i) => {
              return (
                <>
                  <TeamCard
                    key={i}
                    img={e.img}
                    name={e.name}
                    job={e.job}
                    description={e.description}
                  />
                </>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Team;

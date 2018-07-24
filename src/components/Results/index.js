/**
 * Description here...
 */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 1rem 2rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  background: #fdfbf1;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
`;

const Key = styled.p`
  font-weight: bold;
  margin-right: 0.25rem;
`;

const Image = styled.img`
  max-width: 400px;
  max-height: 400px;
  ${({ isSelected }) => isSelected && `border: 4px solid blue;`};
  cursor: pointer;
`;

const Results = ({ data, selectedPhoto, setSelectedPhoto }) => (
  <Wrapper>
    {Object.keys(data).map(key => (
      <FlexRow key={key}>
        <Key>{key}:</Key>
        {key !== "photos" && <p>{data[key]}</p>}
        {key === "photos" && (
          <div>
            {data[key].map(photoRef => (
              <Image
                key={photoRef}
                src={photoRef}
                isSelected={selectedPhoto === photoRef}
                onClick={() => setSelectedPhoto(photoRef)}
              />
            ))}
          </div>
        )}
      </FlexRow>
    ))}
  </Wrapper>
);

export default Results;

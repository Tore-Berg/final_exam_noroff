import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`
export default function LoaderIndicator() {
    return (
        <LoaderWrapper>
        <Loader
        type="ThreeDots"
        color="gold"
        height={100}
        width={100}
        timeout={3000}
      />
      </LoaderWrapper>
    )
}

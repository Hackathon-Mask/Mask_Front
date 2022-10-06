import styled from "styled-components";

export const ProfileContainer = styled.div`
  float: left;
  width: 100%;
  height: 250px;
  border: 2px solid #f1f3f5;
`;

export const ProfileWrap = styled.div`
  width: 1000px;
  height: 250px;
  display: flex;
  //   background-color: #333;
  margin: 0 auto;
`;

export const ProfileImg = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  width: 150px;
  height: 150px;
  //   background-color: #555;
  border-radius: 50%;
`;

export const ProfileAllInfo = styled.div`
padding-top: 25px;
  display: flex;
  width: 700px;
  height: 100px
  float: right;
//   background-color: green;
`;

export const ProfileLocation = styled.div`
  margin-top: 40px;
  width: 500px;
  height: 200px;
  background-color: #555;
  font-size: 20px;
  color: #2b2b2b;
  .username {
  }
  .bedgetextwrap {
    display: flex;
    width: 250px;
    height: 30px;
    // background-color: yellow;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .bedgetextwrap .bedge {
    width: 50px;
    height: 20px;
    border-radius: 30px;
    padding-top: 10px;
    background-color: #0d77f3;
    text-align: center;
    margin-bottom: 8px;
    color: white;
  }
  .bedgetextwrap .text {
    display: block;
    padding-top: 10px;
    padding-left: 7px;
    color: #676666;
  }
`;

export const ProfileSkill = styled.div`
  width: 300px;
  height: 200px;
  //   background-color: #333;
`;

export const ProfileBedge = styled.div`
  width: 40px;
  height: 20px;
  background-color: #0d77f3;
  border-radius: 30px;
  text-align: center;
  padding-top: 8px;
  margin-top: 8px;
  color: white;
  font-size: 12px;
  span {
    font-size: 10px;
  }
`;

export const ProfileBedgeWrap = styled.div`
  width: 50px;
  height: 150px;
  background-color: red;
`;

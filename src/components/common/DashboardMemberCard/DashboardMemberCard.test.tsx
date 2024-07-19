import { describe, test, vi } from "vitest";
import {render} from '@testing-library/react'
import DashboardMemberCard from './index'

const Card = <DashboardMemberCard 
                profileImage='https://i.ibb.co/Jk11psz/avatar.png' 
                emailAddress='SomtoNwobodo@gmail.com' 
                fullName='Somtochukwu Nwobodo' 
                role='Admin' 
                roles={['Admin', 'Guest', 'User']} 
                changeRole={(role: string) => {
                  console.log('Role changed: ' + role)
                }} 
                deleteMember={() => {
                  console.log('Member deleted')
                }} 
                otherInfo={[]}  
              />

describe("<DashboardMemberCard />", () => {
    test("renders DashboardMemberCard", () => {
        render(Card)
    });

    it("has required props (changeRole)", () => {
      expect.assertions(1);
      // eslint-disable-next-line testing-library/prefer-screen-queries
      expect(Card.props.changeRole).toBeDefined();
    });

    it("has required props (deleteMember)", () => {
      expect.assertions(1);
      // eslint-disable-next-line testing-library/prefer-screen-queries
      expect(Card.props.deleteMember).toBeDefined();
    });

    it("has required props (roles)", () => {
      expect.assertions(1);
      // eslint-disable-next-line testing-library/prefer-screen-queries
      expect(Card.props.roles).toBeDefined();
    });

    it("has required props (otherInfo)", () => {
      expect.assertions(1);
      // eslint-disable-next-line testing-library/prefer-screen-queries
      expect(Card.props.otherInfo).toBeDefined();
    });

    it("has required props (role)", () => {
      expect.assertions(1);
      // eslint-disable-next-line testing-library/prefer-screen-queries
      expect(Card.props.role).toBeDefined();
    });

    it("has required props (fullName)", () => {
      expect.assertions(1);
      // eslint-disable-next-line testing-library/prefer-screen-queries
      expect(Card.props.fullName).toBeDefined();
    });

    it("has required props (emailAddress)", () => {
      expect.assertions(1);
      // eslint-disable-next-line testing-library/prefer-screen-queries
      expect(Card.props.emailAddress).toBeDefined();
    });

    it("has required props (profileImage)", () => {
      expect.assertions(1);
      // eslint-disable-next-line testing-library/prefer-screen-queries
      expect(Card.props.profileImage).toBeDefined();
    });


})
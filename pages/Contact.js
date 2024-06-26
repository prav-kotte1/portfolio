import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 2rem;
`;

const Contact = () => (
  <ContactContainer>
    <h1>Contact Me</h1>
    <p>Email: pravallikakotte11@gmail.com</p>
    <p>
      GitHub: <a href="https://github.com/prav-kotte1">https://github.com/prav-kotte1</a>
    </p>
    <p>
      LeetCode: <a href="https://leetcode.com/u/pravallika_kotte/">https://leetcode.com/u/pravallika_kotte/</a>
    </p>
    <p>
      GeeksforGeeks: <a href="https://www.geeksforgeeks.org/user/pravallikakotte/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user">https://www.geeksforgeeks.org/user/pravallikakotte/</a>
    </p>
  </ContactContainer>
);

export default Contact;

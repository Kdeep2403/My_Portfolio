import React from 'react';
import './Education.css';

const Education = () => (
  <section className="education">
    <h2>Education</h2>
    <ul>
      <li>
        <h3>+2(NON-MEDICAL)</h3>
        <p>Samar Study Hall
            79.2% March 2021
            Kashipur, Uttarakhand</p>
      </li>
      <li>
        <h3>ASPIRE LEADERSHIP PROGRAM</h3>
        <p>Aspire Institute
           April 2024</p>
      </li>
      <li>
        <h3>BACHELOR OF TECHNOLOGY</h3>
        <p>7.04 OCPA till September 2024
            Eternal University
            Baru Sahib, Sirmaur(H.P.)</p>
      </li>
      {/* Add more education details as needed */}
    </ul>
  </section>
);

export default Education;

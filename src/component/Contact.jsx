import React from "react";
import { styled } from "styled-components";



const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;

    .container {
      margin-top: 6rem;
      text-align: center;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
    @madia(max-width:${({theme})=>theme.media.tab}){
      .container{
        padding: 100rem;
      }
    }
  `;
  return (
    <Wrapper>
      <h2 className="common-heading">Feel Free To Contact US</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30141.344360277515!2d72.80838186702434!3d19.20969592588943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6c71e00b21f%3A0xfa74b1f57d575513!2sKandivali%2C%20Kandivali%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1689315397526!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xvojonwo"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required
            ></textarea>
            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;

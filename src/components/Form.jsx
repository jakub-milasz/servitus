import React from "react";

export default function Form() {
  return (
    <form action="https://formsubmit.co/servitus.odszkodowania@gmail.com" method="post" id="form">
      
      <div className="form-group">
        <label htmlFor="firstname">Imię:</label>
        <input type="text" id="firstname" name="firstname" required />
      </div>

      <div className="form-group">
        <label htmlFor="lastname">Nazwisko:</label>
        <input type="text" id="lastname" name="lastname" required />
      </div>

      <div className="form-group">
        <label htmlFor="email">E-mail:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required 
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Numer telefonu:</label>
        <div className="phone-input" style={{ display: 'flex', gap: '5px' }}>
          <select name="country-code" id="country-code" defaultValue="+48">
            <option value="+48">PL (+48)</option>
            <option value="+49">DE (+49)</option>
            <option value="+44">UK (+44)</option>
            <option value="+1">US (+1)</option>
          </select>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            required 
          />
        </div>
        <div className="form-group">
          <textarea 
              id="message" 
              name="message" 
              rows="4" 
              placeholder="Jeśli chcesz, podaj numer działki, adres..." 
              style={{ width: '100%', marginTop: '10px' }} 
            ></textarea>
        </div>
      </div>
      <button type="submit">Wyślij formularz</button>
    </form>
  );
}
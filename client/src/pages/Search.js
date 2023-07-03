import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import '../style/homepage.css';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState('0');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { searchQuery, selectedOption };
    setSubmittedData(data);
    alert(`Submitted Data:\nSearch Query: ${data.searchQuery}\nSelected Option: ${data.selectedOption}`);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const renderInputFields = () => {
    switch (selectedOption) {
      case '1':
        return (
          <Form.Control
            type="text"
            placeholder="Username"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        );
      case '2':
        return (
          <Form.Control
            type="text"
            placeholder="Email"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        );
      case '3':
        return (
          <Form.Control
            type="text"
            placeholder="Experience"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        );
      case '4':
        return (
          <Form.Control
            type="text"
            placeholder="Level"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className='background'>
      <Form onSubmit={handleSubmit} inline>
        <Form.Label className="my-1 mr-2 form" htmlFor="inlineFormCustomSelectPref">
          Search
        </Form.Label>
        <Form.Control
          as="select"
          className="my-1 mr-sm-2"
          id="inlineFormCustomSelectPref"
          custom
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="0">Search by ...</option>
          <option value="1">Username</option>
          <option value="2">Email</option>
          <option value="3">Experience</option>
          <option value="4">Level</option>
        </Form.Control>
        {renderInputFields()}
        <Form.Check
          type="checkbox"
          className="my-1 mr-sm-2 form"
          id="customControlInline"
          label="Remember my preference"
          custom
        />
        <Button type="submit" className="my-1">
          Search
        </Button>
        <a href="/" className="btn btn-secondary my-1 mx-2">Back</a>
      </Form>
    </div>
  );
}

export default Search;

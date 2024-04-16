
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

/*
    State for Team Members: First, use the useState hook to manage the state of the team members.

    State for Input Fields: Also, manage the state of the input fields for the new team member's details.

    Add Team Member Function: Implement a function to add a new team member to the state.

    Handle Change: Implement functions to handle changes in the input fields.

    Plus Button onClick Event: Add an onClick event to the plus button that calls the function to add a new team member.


*/



function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}

function SaveIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
      <polyline points="17 21 17 13 7 13 7 21" />
      <polyline points="7 3 7 8 15 8" />
    </svg>
  )
}

function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}

function TeamMemberForm({ newMember, handleInputChange, handleSubmit }) {
  return (
    <div className="flex items-center gap-4 p-4">
      <Input
        name="name"
        value={newMember.name}
        onChange={handleInputChange}
        placeholder="Name"
      />
      <Input
        name="position"
        value={newMember.position}
        onChange={handleInputChange}
        placeholder="Position"
      />
      <Input
        name="number"
        value={newMember.number}
        onChange={handleInputChange}
        placeholder="Jersey Number"
      />
      <Button onClick={handleSubmit} className="ml-auto h-8 w-8" size="icon">
        <PlusIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}

export function TeamRoster() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [newMember, setNewMember] = useState({ name: '', position: '', number: '' });
  const [errors, setErrors] = useState({});

  function addTeamMember() {
    const validationErrors = validateInputs(newMember);
    if (Object.keys(validationErrors).length === 0) {
      setTeamMembers([...teamMembers, newMember]);
      setNewMember({ name: '', position: '', number: '' }); // Clear form after adding
      setErrors({}); // Clear errors if add is successful
    } else {
      setErrors(validationErrors);
    }
  }

  function validateInputs(member) {
    const errors = {};
    if (!member.name) errors.name = "Name is required";
    if (!member.position) errors.position = "Position is required";
    if (!member.number) errors.number = "Jersey Number is required";
    // Add any other specific validations here (e.g., format checks)
    return errors;
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewMember({ ...newMember, [name]: value });
  }

  return (
    
    <Card>
      <CardHeader>
        <CardTitle>Team Roster</CardTitle>
        <CardDescription>Manage your team members</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex items-center gap-4 p-4">
              <div>{member.name}</div>
              <div>{member.position}</div>
              <div>{member.number}</div>
            </div>
          ))}
          <TeamMemberForm 
            newMember={newMember} 
            handleInputChange={handleInputChange} 
            handleSubmit={addTeamMember} 
          />
        </div>
      </CardContent>
    </Card>
  );
}
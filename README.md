# Beetles 2023
Web design project for MISSA ITC 2023; Case Western Reserve University "Beetles" team.

[Project Tickets](https://github.com/users/benjaminwp18/projects/1/views/1)

## Running
- `npm install`
- `npm run dev`
- visit http://localhost:5173

## Planning
### Pages
- Home
- Create profile
	- Make an account: email, password, name
	- Profile: picture, bio, school, major
	- Compatibility: sleep schedule, smoking, etc.
- Search
	- Display found roommates
	- Recommend roommates based on attributes
- Weights & biases on which attribute matches/mismatches contribute to the recommendation algorithm, because not all mismatches are equally as catastrophic and not all matches are equally as important :)
- Example: smoking mismatch would be a greater penalty than, say, a music taste mismatch
		- Stretch: AI matching of similar bios
			- Using GPT-3/ChatGPT API by OpenAI

### DB
- Going to use MongoDB as it allows for easy integration with Prisma and the rest of the stack. Also, JSON is easy to parse, and the query 
 - Will store:
 	- User
		- UUID
		- Email
		- password (bcrypt from node)
		- first name
		- last name 
		- Picture
		- Bio
		- School (note: recommendation/match bonus for same school)
		- Major (note: recommendation/match bonus for same major)
		- compatibility stuff:
			- smoking/nonsmoking
			- music type
			- sleep schedule, etc.
			- implemented as booleans whenever applicable, JSON otherwise
	- RoommateRelation
		- Stores users who have declared to be rooming with each other.
		- These users are taken out of the system, and the specific pairing of roommates is never made public, but only kept for internal analytics and to be displayed to the two users who are rooming
		- User1 (type User)
		- User2 (type User)
	- MatchRelation
		- Stores the match score between two users. Can be (re)calculated on the fly, but is stored to allow for optimization.
		- matchScore (calculated by the recommendation algorithm based on interest alignment, lifestyle alignment, etc.)
		- User1 (type User)
		- User2 (type User)
	- Forum
		- Discussions of topics of interest to students.
		- Allowing for roommate-finding for specific regions, etc.
	- Events in the city
	- About
		- Information about the project
		- Contact information
		- Terms of Use
		- Privacy Policy

## Tech Stack
- Svelte
- Node.js
- MongoDB
- Prisma (ORM)
- Apollo GraphQL (optional/stretch goal, makes searching easier)

## Team
- Benjamin P. (Project Manager)
- Ray L.
- Andrej A.
- Simon S.

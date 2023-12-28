# React Airbnb clone

## Tools 🪄:
   - React 
   - react-dom 
   - vite 
   - eslint 
   - typeScript

---

## Goals 🎯:
- 💡 What are the advantages of creating components?
- 💡 How to use TypeScript with React? 
- 💡 How do you map through the data using .map()?

---

## Let's begin with the first goal 🔦:
  > If you're looking for comprehensive information on components, I've got you covered! I've written a whole article on the subject, which you can easily access on both [GitHub](https://github.com/WajdWael/BakingCourses?tab=readme-ov-file#what-are-react-components) and [LinkedIn](https://www.linkedin.com/pulse/what-react-components-wajd-wael-gv0xf%3FtrackingId=xyAJ9YfnSNaeFUGLqJkEUQ%253D%253D/?trackingId=xyAJ9YfnSNaeFUGLqJkEUQ%3D%3D). Don't miss out on the opportunity to gain valuable insights - take a look today!

  ### But in short 🪛:
   > React components are a powerful way to build modular, reusable, and efficient user interfaces. They allow you to encapsulate specific functionality and UI elements in reusable pieces of code. By breaking down the UI into independent components, leveraging the virtual DOM, and following a declarative approach, React simplifies development and maintenance while delivering high-performance web applications.


## The second goal 🔦:

![TypeScript and Reactjs logo on a blue background](image.png)
# 💎 Why to use TypeScript with React?

  Using Typescript with React will provide numerous useful and distinct features, but there are too many, so I picked the most 3 important features.

   - ***Shared types***: TypeScript allows defining shared types and interfaces for both frontend and backend codebases. This promotes consistency and reduces data type mismatches.
        - Shared types shine whenever you are dealing with APIs. Example:
             When you return a user object with specific properties, and you want to use the same user object structure in your React frontend codebase. To run name, address, followers, and following on the frontend page!

            ***BACKEND CODE***

             ```TypeScript
            // types.ts a backend file
              export interface User {
                id: number;
                name: string;
                email: string;
                // ... other properties
              }
             ```

            ***FRONTEND CODE***

             ```typeScript
              import React, { useState, useEffect } from 'react';
              import axios from 'axios';
              import { User } from './types';

              const UserProfile: React.FC = () => {
                const [user, setUser] = useState<User | null>(null);

                useEffect(() => {
                  axios.get('/api/user').then((response) => {
                    const userData: User = response.data;
                    setUser(userData);
                  });
                }, []);

                if (!user) {
                  return <div>Loading...</div>;
                }

                return (
                  <div>
                    <h1>{user.name}</h1>
                    <p>Email: {user.email}</p>
                    {/* ... other user-related components */}
                  </div>
                );
              };
              export default UserProfile;
             ```

            > Consider defining a shared type for the user object, which can be used in both the backend and frontend code. This approach can help you detect errors early on and enhance collaboration, making it easier and faster to launch your project with high quality.


   - ***Code predictability***: refers to the ability to anticipate and understand the behavior and outcomes of a codebase with a high degree of certainty. So you can find errors early in the coding stage before moving to the run stage, and then you struggle with a huge number of errors.
  
      - let's take an example:
      ```TypeScript
        // TypeScript definition for the props
        interface GreetingProps {
          name: string;
        }

        // React component with explicit prop types
        const Greeting: React.FC<GreetingProps> = ({ name }) => {
          return <div>Hello, {name}!</div>;
        };

        // Usage of the Greeting component
        const App: React.FC = () => {
          const user = {
            firstName: "John",
            lastName: "Doe",
          };

          // TypeScript will catch the error since 'firstName' is not compatible with 'name'
          return <Greeting name={user.firstName} />;
        };
      ```

   - ***Early Error Detection***: TypeScript performs static type checking during compilation, catching errors before runtime. This means that many common errors, such as passing incorrect data types or accessing undefined properties, are identified during development. TypeScript helps prevent errors and reduces debugging time with detailed error messages.
     - Let's see an example:
      ```TypeScript
      interface User {
        name: string;
        age: number;
      }
      interface UserProps {
        user: User;
      }

      const UserComponent: React.FC<UserProps> = ({ user }) => {
        return (
          <div>
            <h2>{user.name}</h2>
            <p>Age: {user.age}</p>
          </div>
        );
      };

      const App: React.FC = () => {
        const user = {
          name: 'John Doe',
          age: '25', // Error: Type 'string' is not assignable to type 'number'.
        };

        return <UserComponent user={user} />;
      };

      export default App;
      ```

   ### An example form this proejct `data.ts` file:
   ```TypeScript
   const data: {
    id: number,
    title: string,
    description: string,
    price: number,
    image: string,
    alt: string,
    stats: {
        rating: number,
        reviewCount: number,
    }
    location: string,
    openSpots: number
    }[] = [....]
   ```

----

## 💎 How to use TypeScript with React?
   We will use [Vite](https://vitejs.dev/) to do this process easily, And Vite is a build tool and development server It focuses on providing fast and efficient development setups for frameworks like React, Vue.js, and Preact. 

- **Start your project by running:**
  ```JavaScript
    npm create vite@latest
    > . // foldername ? 'type your project name' : 'type .'
    > react // select React
    > TypeScript // select TypeScript
  ```


## 💎 How do you map through the data using .map()?

### Step By Step
- 📍 Import the data.ts file to fetch 🖱 data from it.
- 📍 Use .map() to fetch data and to return a new array for every single element in the data file.
- 📍 The program checks whether the item is "sold out" or 'online' by running some if statements and then displays a specific text based on the result.

```TypeScript
import data from '../../data' // import data 📍
export default function Card() {
    const cards = data.map(item => { // here fetching data 📍
        let badgeText: string = "";
        let addclass: string = "";
        if (item.openSpots === 0) { // checks for sold out 📍
            badgeText = "SOLD OUT"
        } else if (item.location === "Online") {
            badgeText = "ONLINE" // checks for online 📍
            addclass = 'online'
        }

        return <section className='card' key={item.id}>
            {
                badgeText &&
                <div className={`card-badge ${addclass}`}>{badgeText}</div>
            }
            <img className='card-img' src={`/src/assets/images/${item.image}`} alt={item.alt} />
            <div className="card-stats">
                <img src={stars} alt="Star" className='card-star-img' />
                <span>{item.stats.rating}</span>
                <span className='gray-title'>({item.stats.reviewCount}) • </span>
                <span className='gray-title'>{item.location}</span>
            </div>
            <h5 className='card-header'>{item.title}</h5>
            <p><span className='card-price'>From ${item.price}</span>/person</p>
        </section>
    })
    return cards;
}
```


*Writing this README took a significant amount of effort and time.*

***Please consider supporting us by giving a star ⭐.***
# Covid-19-SafeTrack Harit Talwar and Smriti Wadhwa
A public domain that allows a user to explore their surroundings in a "Covid safe" manner!
A check in service that allows users to see the vaccinated and mask status of anonymous users around them.

What is SafeTrack?

SafeTrack is a location tracking system that depicts the user’s immediate environment and alerts the user with detailed COVID-19 related information about other near-by users. If an individual is within 1 mile of the user, SafeTrack alerts them with the individual’s vaccination record, what type of vaccination they have received, how far along they are into their vaccinations, and whether or not they are wearing a mask. SafeTrack allows users to be aware of their surroundings and travel with caution. 

Why choose SafeTrack? 

How does SafeTrack work (with explanation of the different programs we have developed)?

SafeTrack uses javascript code and the geolocation API in order to track a user’s latitude and longitude units (representing their location). With this location, we utilize excel programming to draft user input information and save it with their phone number as a personalized profile. Once two users utilize the website domain and sign up, we use more extensive js in order to calculate the distance between two individuals using their longitude and latitude values via the Haversine formula. Much of the planning of the algorithmic depiction of code and the user input was first developed using java and PHP, as reference code. This developed into one main web-dev interface, represented using HTML,CSS, and JS.

Detailed Explanation of each file:

UserInputQuestions.java

Throughout this program, we are utilizing the Scanner class in order to program for user input. By creating new input string variables, we were able to ask the user for string answers regarding detailed questions about their vaccination records.

MainLocationSystem.html

Throughout this file, we are mainly utilizing the javascript program and the geolocation API in order to find the latitude and longitude values of the user. We have also implemented a browser checker that allows users to access the website from any given browser except internet explorer.

UserInputTwo.php

This php file was a very vague idea in the process of understanding how to interpret user input. We were considering using php to register user profiles, but decided to implement our user input program in HTML, instead.

LocationComparison.java

Once we were able to access the user’s location (via their numerical - latitude and longitude - location), we then programmed an instance that would compare two host-imputed locations and calculate the distance between these two points using the Haversine formula. The Haversine formula is the equation which returns the “great-circle distance” between two locations. The formula utilizes spherical trigonometry in order to relate the twisted sides and angles of the spherical Earth. The equation is represented as follows: 


a=sin^2 (Δφ/2) + cos φ2 * sin2(Δλ/2)

c = 2 * atan2(sin(a), sin(1-a))

d = R (radius of Earth) * c


LocationV2.html

In order to correctly create our website instance, we wanted to have all of our programs in HTML related files. Thus, we converted our java location system into a javascript file (functions the same as the java program - LocationComparison.java).


Meet you developers!:

Harit Talwar (meet your developers):

Hello, all! My name is Harit Talwar and I am an incoming Senior at Arcadia High School. I was introduced and intrigued with the idea of programming at the start of quarantine. Instantly, I fell in love with the complex algorithms represented through code, implementing long lines of loops, and the various different languages that come together to form amazing designs. I have recently developed an interest in security programming and have engrossed myself in learning the development of keyloggers, ciphers, ethical hacking, network traffic analysis, and antivirus/encryption softwares. I am a certified developer in java, python, HTML/CSS/JS, assembly, C#, Ruby, LaTeX, MiKTeX, Lua, and PHP. I intern at Ucode, La Canada Training Facility as head of LUA development and hold the title of head of HTML and CSS at Tech Team Arcadia.

Smriti Wadhwa (meet your developers):

Hi! My name is Smriti Wadhwa and I'm a senior at Arcadia High School. Years ago, I started my coding journey with HTML/CSS and JavaScript, and shortly after started designing small webpages about various topics. Since then, I have learned Java, MATLAB, Python, and am learning UNITY. I'm passionate about animation and UI/UX design as well as robotics. Currently, I'm part of the robotics research HaRVI lab at USC.

# Kushagra Dixit's Developer Portfolio

Welcome to the source code for my personal developer portfolio! This project is built using modern web technologies to showcase my projects, skills, and experience with a focus on immersive UI and interactive design.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (React)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Aceternity UI](https://ui.aceternity.com/) & [Framer Motion](https://www.framer.com/motion/)
- **Form Handling & Email:** [EmailJS](https://www.emailjs.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)

## 🛠️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/KushagraDixit05/Personal-portfolio.git
   ```
2. Navigate to the project directory:
   ```sh
   cd Personal-portfolio
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

### ⚙️ Environment Variables

This project uses EmailJS for the contact form functionality. You will need to create a `.env.local` file in the root directory and add your EmailJS credentials. A placeholder `.env.local` file has already been provided, you just need to populate the values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

#### How to get your EmailJS credentials:

1. **Create an account** at [EmailJS](https://www.emailjs.com/) and log in.
2. **Public Key (`NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`)**: 
   - Go to **Account** (in the dashboard sidebar).
   - Under the **API Keys** tab, you will find your Public Key.
3. **Service ID (`NEXT_PUBLIC_EMAILJS_SERVICE_ID`)**:
   - Go to **Email Services**.
   - Click **Add New Service** (e.g., Gmail). Connect your email account.
   - Once added, you will see a **Service ID** (it usually looks like `service_xxxxx`).
4. **Template ID (`NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`)**:
   - Go to **Email Templates** and click **Create New Template**.
   - In the template editor, you can set up how the email will look when you receive it. Use the following variables to match the form fields:
     - `{{from_name}}` (The sender's name)
     - `{{from_email}}` (The sender's email)
     - `{{subject}}` (The subject of the message)
     - `{{message}}` (The actual message)
   - Save the template. You will find the **Template ID** (e.g., `template_xxxxx`) at the top or in the settings of that template.

### Running the Application

To start the development server, run:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

## 📦 Build for Production

To create an optimized production build, run:

```sh
npm run build
```

You can then run the built application using:

```sh
npm run start
```

## ✨ Features

- **Hero Section:** Engaging introduction with animated text and interactive background effects.
- **Projects Showcase:** Detailed cards for recent projects, linking to live versions and source code.
- **Contact Form:** Fully functional "Contact Me" form integrated directly with EmailJS to send emails without needing a separate backend server.
- **Responsive Design:** Optimized for mobile, tablet, and desktop viewing.

## 📄 License

This project is open-source and available under the terms of the MIT License.

/* Header.css */

/* Custom background and shadow */
.navbar {
  background-color: #2563eb; /* Tailwind's blue-600 */
  color: white;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Logo/title styling */
.navbar-title {
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
}

.navbar-title a {
  text-decoration: none;
  color: white;
  transition: color 0.3s ease-in-out;
}

.navbar-title a:hover {
  color: #dbeafe; /* Lighter blue on hover */
}

/* Navigation links */
.navbar-links {
  display: flex;
  gap: 24px;
  list-style: none;
}

.navbar-links a {
  text-decoration: none;
  color: white;
  transition: color 0.3s ease-in-out;
}

.navbar-links a:hover {
  color: #dbeafe;
}

/* Logout Button */
.logout-button {
  background-color: #dc2626; /* Tailwind's red-500 */
  padding: 8px 16px;
  border-radius: 6px;
  transition: background-color 0.3s ease-in-out;
}

.logout-button:hover {
  background-color: #b91c1c; /* Darker red on hover */
}

/* Responsive Design */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    text-align: center;
  }

  .navbar-links {
    flex-direction: column;
    gap: 12px;
  }
}

## Introduction 
This project is a secure password manager that was built using django. Its a user friendly web application that allows users to store and retrieve their credentials for different websites, while being secure with data encryption and user authentication. 

## How to run 

1. Clone the repo:
   ```
   https://github.com/incizen/PasswordManager.git
   cd PasswordManager/backend
   ```

2. Installing dependencies:
   ```
   pip install -r requirements.txt
   ```

3. How to generate the keys:

- **for the Django SECRET_KEY:**  
  Generate a new key in a Python shell:
  ```python
  from django.core.management.utils import get_random_secret_key
  print(get_random_secret_key())
  ```

- ** for the FERNET_KEY:**  
  Generate a Fernet key with:
  ```python
  from cryptography.fernet import Fernet
  print(Fernet.generate_key().decode())
  ```
Paste the generated values into your `.env` file.

4. Copy `.env.example` to `.env` and dont forget to fill in the with the keys that you created:
   ```
   SECRET_KEY=your-django-secret-key
   FERNET_KEY=your-32-byte-base64-encoded-fernet-key
   ```

5. Running migrations:
   ```
   python manage.py migrate
   ```

5. Starting the server:
   ```
   python manage.py runserver
   ```

6. Open [http://127.0.0.1:8000/](http://127.0.0.1:8000/) in your browser.
   
And thats all it!

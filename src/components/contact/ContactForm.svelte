<script>
  let formData = {
    fullName: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  };

  let errors = {
    fullName: "",
    email: "",
    subject: "",
    message: "",
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let valid = true;

    if (!formData.fullName) {
      errors.fullName = "Please enter your full name.";
      valid = false;
    } else {
      errors.fullName = "";
    }

    if (!formData.email) {
      errors.email = "Please enter your email address.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
      valid = false;
    } else {
      errors.email = "";
    }

    if (!formData.subject) {
      errors.subject = "Please enter a subject.";
      valid = false;
    } else {
      errors.subject = "";
    }

    if (!formData.message) {
      errors.message = "Please enter your message.";
      valid = false;
    } else {
      errors.message = "";
    }

    if (valid) {
      console.log("Form Data Submitted:", formData);

      formData = {
        fullName: "",
        email: "",
        mobile: "",
        subject: "",
        message: "",
      };

      errors = {
        fullName: "",
        email: "",
        subject: "",
        message: "",
      };
    }
  };
</script>

<div class="form-container">
  <form on:submit={handleSubmit} class="form">
    <div class="form-group">
      <input
        type="text"
        id="fullName"
        bind:value={formData.fullName}
        class="form-input"
        placeholder="Full Name"
      />
      {#if errors.fullName}
        <p class="error">{errors.fullName}</p>
      {/if}
    </div>

    <div class="form-group">
      <input
        type="email"
        id="email"
        bind:value={formData.email}
        class="form-input"
        placeholder="Email Address"
      />
      {#if errors.email}
        <p class="error">{errors.email}</p>
      {/if}
    </div>

    <div class="form-group">
      <input
        type="tel"
        id="mobile"
        bind:value={formData.mobile}
        class="form-input"
        placeholder="Mobile Number (optional)"
      />
    </div>

    <div class="form-group">
      <input
        type="text"
        id="subject"
        bind:value={formData.subject}
        class="form-input"
        placeholder="Subject"
      />
      {#if errors.subject}
        <p class="error">{errors.subject}</p>
      {/if}
    </div>

    <div class="form-group">
      <textarea
        id="message"
        bind:value={formData.message}
        class="form-input"
        placeholder="Your Message"
        rows="4"
      ></textarea>
      {#if errors.message}
        <p class="error">{errors.message}</p>
      {/if}
    </div>

    <div class="form-actions">
      <button type="submit" class="submit-button">Submit</button>
      <button
        type="reset"
        class="reset-button"
        on:click={() => {
          formData = {
            fullName: "",
            email: "",
            mobile: "",
            subject: "",
            message: "",
          };
          errors = {
            fullName: "",
            email: "",
            subject: "",
            message: "",
          };
        }}
      >
        Reset
      </button>
    </div>
  </form>
</div>

<style>
  .form-container {
    background-color: #0d2053;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    padding: 20px;
    max-width: 600px;
    margin: 20px auto;
    font-family: Arial, sans-serif;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
  }

  .form-input {
    padding: 10px;
    border: 1px solid #0d2053;
    border-radius: 0.375rem;
    font-size: 1rem;
    color: white;
    width: 100%;
    transition: border-color 0.3s ease;
  }

  .form-input:focus {
    border-color: #2563eb;
    outline: none;
    box-shadow: 0 0 0 1px rgba(37, 99, 235, 0.5);
  }

  .form-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .submit-button {
    background-color:  #2a4ba3;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 0.375rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .submit-button:hover {
    background-color: #60a5fa;
  }

  .reset-button {
    background-color: #f3f4f6;
    color: #374151;
    border: 1px solid #d1d5db;
    padding: 10px 20px;
    border-radius: 0.375rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .reset-button:hover {
    background-color: #e5e7eb;
  }

  .error {
    color: red;
    font-size: 0.875rem;
    margin-top: 4px;
  }
</style>

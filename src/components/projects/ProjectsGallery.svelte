<script>
  import { onMount, onDestroy } from "svelte";

  let projects = [
    {
      title: "Website E-commerce",
      description:
        "A modern e-commerce website with a clean and minimal design. It features an eye-catching banner, a navigation menu with product categories like clothing and accessories.",
      image: "/images/e-commerce.jpg",
      link: "https://example.com/project1",
    },
    {
      title: "Health Record Application",
      description:
        "A health tracking app displaying steps, calories, and sleep data with colorful graphs and a user-friendly design.",
      image: "/images/HealthRecordApplication.jpg",
      link: "https://example.com/project2",
    },
    {
      title: "Event Website",
      description:
        "A professional event website design for a music festival, featuring a vibrant banner, countdown timer, and sections for tickets, lineup, schedule, and venue map.",
      image: "/images/EventWebsite.jpg",
      link: "https://example.com/project3",
    },
  ];

  let currentIndex = 0;

  const changeProject = () => {
    currentIndex = (currentIndex + 1) % projects.length;
  };

  let interval;
  onMount(() => {
    interval = setInterval(changeProject, 3000);
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<div>
  <div class="gallery">
    {#each projects as project, index}
      <div class="project-card {index === currentIndex ? 'active' : ''}">
        <img src={project.image} alt={project.title} />
        <div class="details">
          <h3 class="text-lg font-semibold">{project.title}</h3>
          <p class="text-sm text-gray-600">{project.description}</p>
        </div>
      </div>
    {/each}
  </div>

  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div class="bg-white p-6 rounded-lg shadow-lg max-w-md">
      <h3 class="text-2xl font-bold mb-2">{projects[currentIndex].title}</h3>
      <p class="text-gray-700 mb-4">{projects[currentIndex].description}</p>
      <a
        href={projects[currentIndex].link}
        target="_blank"
        class="text-blue-500 underline"
      >
        Δείτε το project
      </a>
    </div>
  </div>
</div>

<style>
  .gallery {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
    overflow: hidden;
  }

  .project-card {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
    transition:
      transform 0.3s ease-in-out,
      height 0.3s ease-in-out;
    width: 350px;
    height: 250px;
    display: flex;
    flex-direction: column;
    opacity: 0;
    animation: fadeIn 1s forwards;
    margin: 0 10px;
  }

  .project-card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    transition: height 0.3s ease-in-out;
  }

  .project-card.active {
    opacity: 1;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .details {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    height: 100%;
    overflow: hidden;
    transition: height 0.3s ease-in-out;
  }

  .project-card:hover {
    transform: scale(1.1);
    height: 350px;
  }

  .project-card:hover img {
    height: 200px;
  }

  .project-card:hover .details {
    height: 100%;
  }

  .project-card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
</style>

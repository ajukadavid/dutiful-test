<template>
    <div class="flex flex-col min-h-screen">
        <header>
        <NavBar />

        </header>
        <main class="flex-grow">
            <slot />

        </main>
      <footer class=" ">
        <AppFooter />

      </footer>
    </div>
  </template>
  
import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: "b88bsc",
  e2e: {
    'baseUrl': 'http://localhost:4200',
  },
})

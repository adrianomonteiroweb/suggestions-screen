# Use a Node.js LTS (Long Term Support) image as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY ./packages/api/package.json ./

# Install project dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application code to the container
COPY ./packages/api .

# Build the application (if necessary)
# RUN yarn build

# Expose the port the application will listen on
EXPOSE 3001

# Start the application
CMD ["yarn", "start"]

# **docker-challenges**

Repository created for solving challenges of the Docker course.

</br>
</br>

## **Challenge 1**

</br>

You will have to publish an image on Docker Hub. When we run:

docker run `<your-user>/fullcycle`

We should have the following output: Full Cycle Rocks!!

If you notice, this image just prints a message as the final result, so it's worth checking out the Go Lang website to learn how to make a "Hello, world" program.

Remember that Go Lang has ready-to-use official images, so it's worth checking the Docker Hub.

Our Go project image needs to be less than 2MB =)


### **Solution**

Run:

```
nascito/fullcycle
```
Image: https://hub.docker.com/repository/docker/nascito/fullcycle/general

</br>
</br>

## **Challenge 2**

</br>

In this challenge, you will put into practice what we have learned about using nginx as a reverse proxy. The main idea is that when a user accesses nginx, it will make a call to our node.js application. This application will add a record to our MySQL database, registering a name in the people table.

The node.js application should return:

```
<h1>Full Cycle Rocks!</h1>
```

List of names registered in the database.
Generate the docker-compose in a way that just by running: docker-compose up -d everything should be working and available on port 8080.

Upload everything to a repository and submit your delivery.

The programming language for this challenge is Node/JavaScript.

### **Solution**

1. Access the challenge-2 folder of the repository in your terminal;
2. Run:

```
docker-compose up -d
```

3. Access http://localhost:3000
4. Reload the page as many times as you want.
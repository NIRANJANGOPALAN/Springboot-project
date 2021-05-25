package net.javaproject.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import net.javaproject.springboot.model.User;
import net.javaproject.springboot.repository.UserRepository;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner{
	

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

 @Autowired
 private UserRepository userRepository;
 
 @Override
 public void run(String... args) throws Exception {
	 this.userRepository.save(new User("Morgan","Batsman","England"));
	 this.userRepository.save(new User("Roy","Batsman","England"));
	 this.userRepository.save(new User("Root","Batsman","England"));
	 this.userRepository.save(new User("Broad","Bowler","England"));
	 this.userRepository.save(new User("Anderson","Bowler","England"));

}
 }

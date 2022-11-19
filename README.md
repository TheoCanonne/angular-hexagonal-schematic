# Angular Hexagonal Schematic

This schematic can be used to generate a hexagonal module with angular cli.


# Installation

To use it, you can simply use this command in your angular project :

```
ng add angular-hexagonal-schematic
```


# How to use

```
 ng g angular-hexagonal-schematic:hexagonal
 ? What is the domain name? <your-domain-name>
```

# folder created :
```
domain-example
│   domain-example.module.ts
│
├───application
│       README.md
│
├───domain
│   │   README.md
│   │
│   ├───models
│   │       domain-example.model.ts
│   │
│   ├───ports
│   │       domain-example.port.ts
│   │
│   ├───repositories
│   │       domain-example.repository.ts
│   │
│   └───services
│           domain-example.service.spec.ts
│           domain-example.service.ts
│
└───infrastructure
    │   README.md
    │
    └───repositories
            domain-example-http-repository.service.spec.ts
            domain-example-http-repository.service.ts
            domain-example-mock-repository.service.spec.ts
            domain-example-mock-repository.service.ts
```

You will find a ReadMe in all folders in order to explain how to manage your file architecture.
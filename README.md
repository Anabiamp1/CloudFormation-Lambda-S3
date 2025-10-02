# 🚀 Desafio AWS CloudFormation + Lambda + S3  

## 📚 Descrição do Desafio  
Este projeto tem como objetivo aplicar conceitos de **automação de infraestrutura na AWS** utilizando **CloudFormation**, além de consolidar conhecimentos sobre **Lambda Functions** e **Amazon S3**.  

## 📂 Estrutura do Repositório  
- `templates/` → Contém o template CloudFormation (`s3-lambda-stack.json`) que cria:
  - Bucket S3
  - Role da Lambda
  - Função Lambda integrada ao bucket
- `lambda/` → Código da Lambda (`index.js`) e arquivo compactado (`lambda.zip`)
- `docs/` → Diagramas e imagens de apoio (como o fluxo de processamento)

## 🛠️ Recursos Criados  
- **Amazon EC2** – instância simples.  
- **Amazon S3** – bucket de armazenamento.  
- **Amazon VPC** – rede virtual básica.  
- **AWS Lambda** – função acionada por eventos no S3.  

---

## 📊 Diagramas  

###  
![EC2 Diagrama](docs/ec2-diagrama.png)  

### 
![S3 Diagrama](docs/s3-diagrama.png)  

###   
![VPC Diagrama](docs/vpc-diagrama.png)  



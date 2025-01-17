import os

def create_account():
    """New User"""
    username = input("New user: ")
    password = input("New password: ")
    balance = 0 

    # User information
    with open("bank_accunts.txt", "a", encoding="utf-8") as file:
        file.write(f"{username},{password}, {balance}\n")
    print("your account working.")

def login():
    """User enter"""
    username = input("User name enter: ")
    password = input("Password enter: ")

    # dosya
    with open("bank_accounts.txt", "r", encoding= "utf-8") as file:
        accounts = file.readlines()

    for account in accounts:
        stored_username, stored_password, stored_balance = account.strip().split(",")
        if username == stored_username and password == stored_password:
            print("Giriş başarılı!")
            return stored_username, int(stored_balance)
    
    print("Kullanıcı adı veya şifre hatalı!")
    return None, None

def bank_operations(username, balance):
    """Bankacılık işlemleri (bakiye sorgulama, para yatırma, çekme)"""
    while True:
        print("\n1. Bakiye Sorgulama")
        print("2. Para Yatırma")
        print("3. Para Çekme")
        print("4. Çıkış")
        
        choice = input("Yapmak istediğiniz işlemi seçin (1-4): ")
        
        if choice == "1":
            print(f"Mevcut Bakiyeniz: {balance} TL")
        
        elif choice == "2":
            amount = float(input("Yatırmak istediğiniz miktarı girin: "))
            balance += amount
            print(f"{amount} TL yatırıldı. Yeni bakiyeniz: {balance} TL")
        
        elif choice == "3":
            amount = float(input("Çekmek istediğiniz miktarı girin: "))
            if amount > balance:
                print("Yetersiz bakiye!")
            else:
                balance -= amount
                print(f"{amount} TL çekildi. Yeni bakiyeniz: {balance} TL")
        
        elif choice == "4":
            print("Çıkış yapılıyor...")
            break
        else:
            print("Geçersiz seçim! Lütfen 1-4 arasında bir seçenek girin.")
        
        # Yapılan işlemi dosyaya kaydetme
        save_account_info(username, balance)

def save_account_info(username, balance):
    """Kullanıcı bilgilerini dosyaya kaydetme"""
    with open("bank_accounts.txt", "r", encoding="utf-8") as file:
        accounts = file.readlines()
    
    with open("bank_accounts.txt", "w", encoding="utf-8") as file:
        for account in accounts:
            stored_username, stored_password, stored_balance = account.strip().split(",")
            if stored_username == username:
                file.write(f"{username},{stored_password},{balance}\n")  # Güncel bakiye kaydediliyor
            else:
                file.write(account)

def make_file():
    """Dosya kontrolü ve kullanıcı işlemleri"""
    if not os.path.exists("bank_accounts.txt"):
        print("Hesap dosyası bulunamadı. Yeni hesap oluşturulacak.")
        create_account()
    
    print("\nBanka Uygulamasına Hoş Geldiniz!")
    choice = input("Hesabınız var mı? (Evet/Hayır): ").strip().lower()
    
    if choice == "evet":
        username, balance = login()
        if username:
            bank_operations(username, balance)
    elif choice == "hayır":
        create_account()
        username, balance = login()
        if username:
            bank_operations(username, balance)
    else:
        print("Geçersiz giriş!")

make_file()    
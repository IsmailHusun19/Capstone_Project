const formLogin = () => {
  const boxForm = document.querySelector('form');
  boxForm.innerHTML = `                  
    <div class="email">
        <div class="input-email">
            <input type="email" placeholder="Email" autocomplete="email" required>
            <div class="simbol-email">
                <i class="fa-regular fa-user" ></i>
            </div>
        </div>
    </div>
    <div class="password">
        <div class="input-password">
            <input type="password" placeholder="Password" autocomplete="current-password" required>
            <div class="simbol-password">
                <i class="fa-solid fa-lock" aria-describedby="passwordHelpInline"class="form-control"></i>
            </div>
        </div>
    </div>
    <div class="login">
        <button type="submit">Masuk</button>
        <p class="daftar">Belum punya akun? <a href="#daftar">Daftar</a></p>
    </div>`;
};

export default formLogin;
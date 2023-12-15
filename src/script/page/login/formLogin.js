import fungsiLogin from './fungsiLogin';

const formLogin = () => {
  const boxForm = document.querySelector('form');
  boxForm.innerHTML = `                  
    <div class="email">
        <div class="input-email">
            <input type="email" placeholder="Email" autocomplete="email" id="email" required>
            <div class="simbol-email">
            <i class="fa-regular fa-envelope"></i>
            </div>
        </div>
    </div>
    <div class="password">
        <div class="input-password">
            <input type="password" placeholder="Password" autocomplete="current-password" id="password" required>
            <div class="simbol-password">
                <i class="fa-solid fa-lock" aria-describedby="passwordHelpInline"class="form-control"></i>
            </div>
        </div>
    </div>
    <div class="login">
        <button type="submit" id="btn">Masuk</button>
        <p class="daftar">Belum punya akun? <a href="#daftar">Daftar</a></p>
    </div>`;
  document.getElementById('btn').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    fungsiLogin(email, password);
  });
};

export default formLogin;
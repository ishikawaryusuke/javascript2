'use script';
{
    const btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
        // const resolts = ['大吉', '中吉', '小吉', '末吉'];
        // const resolts = ['大吉', '大吉', '大吉', '末吉'];
        // const n = Math.floor(Math.random() * resolts.length);
        // btn.textContent = resolts[n];
        // btn.textContent = resolts[Math.floor(Math.random() * resolts.length)];
        const n = Math.random();
        if (n < 0.05) {
            btn.textContent = '大吉';


        }else if (n < 0.2) {
            btn.textContent = '中吉';

        }else{
            btn.textContent = '小吉';
        }
        // btn.textContent = n;
        // switch (n) {
        //     case 0:
        //     btn.textContent = '大吉';
        //     break;
        //     case 1:
        //     btn.textContent = '中吉';
        //     break;
        //     case 2:
        //     btn.textContent = '小吉';
        //     break;

        // }

    }); 
}
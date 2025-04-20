async function trackVisitor() {
    const ipData = await fetch('https://ipinfo.io/json').then(res => res.json());
    const data = {
      ip: ipData.ip,
      city: ipData.city,
      region: ipData.region,
      country: ipData.country,
      loc: ipData.loc,
      org: ipData.org,
      ua: navigator.userAgent,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      platform: navigator.platform,
      screen: `${screen.width}x${screen.height}`
    };
  
    fetch("https://discord.https://discord.com/api/webhooks/1358800842995531927/7sK8AwlIyy16NliKLzz0i-iZL_evnF2Sr-U2fHFT3sRaIAbv41LrF5MDMxWdL76ZbXOh/api/webhooks/WEBHOOK_URL_LO", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ content: JSON.stringify(data, null, 2) })
    });
  }
  trackVisitor();
